/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a fully static site in the ./out folder on `npm run build`,
  // so you can host it anywhere (Vercel, Netlify, GitHub Pages).
  output: "export",
  images: { unoptimized: true },

  // ── GitHub Pages PROJECT site only (https://<user>.github.io/<repo>/) ──
  // Uncomment and set to "/<your-repo-name>" so CSS/images load correctly.
  // Leave commented for Vercel, Netlify, a custom domain, or a
  // user site (https://<user>.github.io).
  basePath: "/vishal-portfolio",
  assetPrefix: "/vishal-portfolio/",
};

export default nextConfig;
