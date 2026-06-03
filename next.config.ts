import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * Sent on every route. We're a public SEO content site, so the headers are
 * conservative defaults — nothing here blocks framing *Stay22* inside our own
 * pages (X-Frame-Options only governs who may frame *us*).
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // .md/.mdx so editorial content in /content can be imported as components.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Pin the workspace root — this repo lives under a parent folder that also
  // contains package.json files, and we don't want Next inferring that as root.
  turbopack: { root: process.cwd() },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
