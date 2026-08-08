/**
 * Prefix an internal path with the deploy base path (GitHub Pages serves the
 * site from /begin-again-yoga/ — see docs/TECH.md). Use for every internal
 * link and public/ asset reference.
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return base + (path.startsWith('/') ? path : `/${path}`);
}
