// Root layout: minimal passthrough. The real <html>/<body>, fonts and chrome
// live in app/[locale]/layout.tsx; middleware redirects every path to a locale.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
