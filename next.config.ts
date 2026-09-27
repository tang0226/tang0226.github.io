import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a plain HTML/CSS/JS site into `out/` — GitHub Pages serves static
  // files only. Note this disables `next start`; use `npm run dev` locally.
  output: "export",

  // This repo is `<user>.github.io`, a *user* site served at
  // https://tang0226.github.io/ — so no basePath. (Project sites need
  // `basePath: "/<repo>"`, user sites must not have one.)

  // Emits `about/index.html` instead of `about.html`, which is what GitHub
  // Pages expects when resolving a directory-style URL.
  trailingSlash: true,

  images: {
    // The default loader needs a running server to optimize on request.
    // A static export has none, so images are served as-authored.
    unoptimized: true,
  },

  // sharp is a native module; keep it out of the bundle so the build-time
  // image measuring in components/mdx-image.tsx can require it directly.
  serverExternalPackages: ["sharp"],
};

export default nextConfig;
