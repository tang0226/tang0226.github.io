/**
 * GitHub Pages serves this repo as a *project* site, at
 * https://tang0226.github.io/tang0226/ — so the app is mounted under a
 * sub-path rather than at the domain root.
 *
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH="/tang0226" at build time.
 * It is unset locally, so `npm run dev` still serves from "/".
 *
 * `next/link` applies this automatically. `next/image` and plain <a> tags to
 * files in public/ do NOT — use `withBasePath` for those.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an absolute public-folder path with the deployment base path. */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
