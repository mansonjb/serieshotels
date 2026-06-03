import type { MDXComponents } from "mdx/types";

/**
 * App Router MDX hook. We don't remap elements here — editorial MDX in
 * /content is rendered inside a `.longform` container (see globals.css) that
 * styles raw h2/p/ul/blockquote, so the markdown stays clean and portable.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
