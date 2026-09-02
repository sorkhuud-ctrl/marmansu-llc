import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// GitHub Pages serves this project from a sub-path (marmansu.github.io/marmansu-llc),
// which is why static export + basePath exist at all. Vercel serves from the domain
// root, so those settings must NOT apply there — with them on, every page was being
// exported under /marmansu-llc/... while the live domain served requests at "/",
// which is exactly why marmansu-llc.vercel.app 404'd. Vercel builds also cannot run
// next-intl's middleware (src/proxy.ts) under `output: "export"`, so locale
// redirects silently stopped working too.
//
// Set GITHUB_PAGES=true only in the workflow/command that deploys to GitHub Pages.
// Any other build (including every Vercel build) gets the normal dynamic Next.js
// output: no basePath, middleware enabled, output written to .next as usual.
const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages && {
    output: "export",
    distDir: "dist",
    basePath: "/marmansu-llc",
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
