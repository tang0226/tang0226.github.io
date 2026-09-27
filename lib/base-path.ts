/**
 * This repo is `<user>.github.io`, a *user* site served at
 * https://tang0226.github.io/ — at the domain root, so there is no base
 * path. Kept as a helper so public-folder links stay correct if this ever
 * becomes a project site.
 *
 * `next/link` applies basePath automatically. `next/image` and plain <a>
 * tags to files in public/ do NOT — use `withBasePath` for those.
 */
export const basePath = "";

/** Prefix an absolute public-folder path with the deployment base path. */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
