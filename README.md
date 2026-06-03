# ScreenToTrip

Set-jetting travel guide — visit the real places where films and series were
shot. Programmatic SEO over a typed `Title → Location → Destination` graph,
monetized with Stay22 (hotels) and Viator / GetYourGuide / DiscoverCars /
Tiqets (tours, tickets, cars) through a single `<AffiliateLink>`.

## Stack
- **Next.js 16** (App Router, Server Components, ISR)
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **MDX** for editorial long-form (`/content`)
- Deployed on **Vercel**

## Getting started
```bash
corepack prepare pnpm@9 --activate   # one-time, if pnpm is missing
pnpm install
cp .env.example .env.local           # fill in STAY22_AID + affiliate IDs
pnpm dev                             # http://localhost:3000
```

## Scripts
| Command | Does |
| --- | --- |
| `pnpm dev` | Dev server |
| `pnpm build` | Production build (run before every push) |
| `pnpm start` | Serve the production build |
| `pnpm typecheck` | `tsc --noEmit` |

## Project shape
```
app/                 routes (titles, destinations, locations, guides, static)
components/          AffiliateLink, Stay22Map, cards, layout, JsonLd
content/             editorial MDX + guides registry
data/                types.ts + titles / locations / destinations (typed)
lib/                 site config, affiliate URL builders, data joins
```

## Adding a work
1. Add the `Title` to `data/titles.ts`.
2. Add its `Location`s to `data/locations.ts` (each points at a `titleSlug` +
   `destinationSlug`).
3. Add the `Destination` to `data/destinations.ts` if it's new.
4. `pnpm build` — new pages are statically generated automatically.

See [CLAUDE.md](./CLAUDE.md) for the full content & monetization rules.

## Rules that matter
- **No copyrighted imagery** (posters, stills, logos). Real-place photos only;
  v1 ships image-free (typography + CSS gradients).
- All outbound monetized links go through `<AffiliateLink>` (`rel="sponsored
  nofollow"` + tracking attrs).
- All IDs/secrets (`STAY22_AID`, affiliate PIDs, `TMDB_KEY`) come from env.
