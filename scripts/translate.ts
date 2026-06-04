#!/usr/bin/env tsx
/**
 * Translate UI strings + content (titles, destinations, locations) + the
 * editorial MDX guides from English into fr/de/es/it, using the Claude API.
 *
 *   pnpm translate            # all four locales
 *   ANTHROPIC_MODEL=claude-haiku-4-5 pnpm translate   # cheaper/faster
 *
 * Writes data/generated/i18n/<locale>.json and content/<slug>.<locale>.mdx.
 * Everything we translate here is our own generated copy, never third-party
 * text. On any failure we fall back to the English source so the build is
 * always green. ANTHROPIC_API_KEY from .env.local.
 */
import Anthropic from "@anthropic-ai/sdk";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { UI_EN } from "../data/i18n/ui";
import { TITLES } from "../data/titles";
import { DESTINATIONS } from "../data/destinations";
import { LOCATIONS } from "../data/locations";

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("[translate] ANTHROPIC_API_KEY missing from .env.local");
  process.exit(1);
}
const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";
const client = new Anthropic();

const TARGETS: [code: string, language: string][] = [
  ["fr", "French"],
  ["de", "German"],
  ["es", "Spanish"],
  ["it", "Italian"],
];
const GUIDE_SLUGS = [
  "set-jetting-101",
  "game-of-thrones-locations",
  "european-set-jetting-itinerary",
];
const GEN_DIR = join(process.cwd(), "data", "generated", "i18n");
const CONTENT_DIR = join(process.cwd(), "content");

const SYSTEM = `You are a professional localiser for a travel website about real film and TV filming locations ("set-jetting"). You translate the site's own original marketing and editorial copy.

Rules, always:
- Translate into natural, idiomatic, on-brand travel copy — not literal word-for-word.
- NEVER translate: place names, hotel names, film/series titles, and brand names (Stay22, Viator, GetYourGuide, Tiqets, DiscoverCars, Google Maps, YouTube).
- Preserve every {placeholder} in braces exactly as-is.
- For JSON input: return ONLY a valid JSON value with the EXACT same shape and keys; translate only the human-readable string values. Never translate a value named "slug". No markdown code fences, no commentary.
- For Markdown input: keep ALL Markdown syntax intact, and keep every link target/URL/path unchanged (translate only the visible link text). Return ONLY the translated Markdown, no code fences, no commentary.`;

function stripFences(s: string): string {
  return s
    .trim()
    .replace(/^```(?:json|markdown|md)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

async function call(userText: string, maxTokens: number): Promise<string> {
  const res = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: userText }],
  });
  return res.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");
}

async function translateJSON<T>(obj: T, language: string, hint = ""): Promise<T> {
  const raw = await call(
    `Translate the string values of this JSON into ${language}.${hint ? " " + hint : ""}\nReturn ONLY the JSON with identical keys and shape.\n\n${JSON.stringify(obj)}`,
    8000,
  );
  return JSON.parse(stripFences(raw)) as T;
}

async function translateMarkdown(md: string, language: string): Promise<string> {
  const raw = await call(
    `Translate this Markdown into ${language}. Keep all Markdown and links intact; translate only visible text.\n\n${md}`,
    4000,
  );
  return stripFences(raw);
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function main(): Promise<void> {
  if (!existsSync(GEN_DIR)) mkdirSync(GEN_DIR, { recursive: true });

  const titleSrc = Object.fromEntries(
    TITLES.map((t) => [t.slug, { tagline: t.tagline, synopsis: t.synopsis }]),
  );
  const destSrc = Object.fromEntries(
    DESTINATIONS.map((d) => [d.slug, { blurb: d.blurb }]),
  );
  const locSrc = LOCATIONS.map((l) => ({
    slug: l.slug,
    sceneContext: l.sceneContext,
    howToVisit: l.howToVisit,
    nearbyTips: l.nearbyTips ?? [],
  }));

  for (const [code, language] of TARGETS) {
    console.log(`\n=== ${language} (${code}) ===`);

    // UI
    let ui: unknown = {};
    try {
      ui = await translateJSON(UI_EN, language);
      console.log("  ui            ✓");
    } catch (e) {
      console.warn(`  ui            ✗ ${(e as Error).message} — English fallback`);
    }

    // Titles
    let titles: Record<string, unknown> = {};
    try {
      titles = await translateJSON(titleSrc, language, 'Keys are slugs — do not translate the keys.');
      console.log("  titles        ✓");
    } catch (e) {
      console.warn(`  titles        ✗ ${(e as Error).message}`);
    }

    // Destinations
    let destinations: Record<string, unknown> = {};
    try {
      destinations = await translateJSON(destSrc, language, 'Keys are slugs — do not translate the keys.');
      console.log("  destinations  ✓");
    } catch (e) {
      console.warn(`  destinations  ✗ ${(e as Error).message}`);
    }

    // Locations (chunked; keep "slug" untranslated)
    const locations: Record<string, unknown> = {};
    for (const [i, group] of chunk(locSrc, 12).entries()) {
      try {
        const out = await translateJSON(group, language, 'Each item keeps its "slug" unchanged.');
        for (const item of out as Array<{ slug: string }>) {
          const { slug, ...rest } = item;
          locations[slug] = rest;
        }
        console.log(`  locations[${i}]  ✓ (${group.length})`);
      } catch (e) {
        console.warn(`  locations[${i}]  ✗ ${(e as Error).message}`);
      }
    }

    writeFileSync(
      join(GEN_DIR, `${code}.json`),
      `${JSON.stringify({ ui, content: { titles, destinations, locations } }, null, 2)}\n`,
    );

    // Guides MDX — always write a file (translated, or English fallback).
    for (const slug of GUIDE_SLUGS) {
      const srcPath = join(CONTENT_DIR, `${slug}.mdx`);
      const outPath = join(CONTENT_DIR, `${slug}.${code}.mdx`);
      const src = readFileSync(srcPath, "utf8");
      try {
        const translated = await translateMarkdown(src, language);
        writeFileSync(outPath, `${translated}\n`);
        console.log(`  guide ${slug}  ✓`);
      } catch (e) {
        writeFileSync(outPath, src);
        console.warn(`  guide ${slug}  ✗ ${(e as Error).message} — English fallback`);
      }
    }
  }
  console.log("\n[translate] done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
