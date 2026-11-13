import fs from "fs";
import path from "path";
import type { Plugin } from "vite";

// Writes dist/<route>/index.html for every sitemap URL so crawlers that don't run JS
// see a self-referencing canonical and real internal links instead of the homepage shell.
const BASE = "https://epoxy-masters.com";

const label = (p: string) =>
  p === "/" ? "Home" : p.replace(/^\/|\/$/g, "").split("/").pop()!.replace(/-fl$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function staticPages(): Plugin {
  return {
    name: "static-pages",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const shellPath = path.join(dist, "index.html");
      const sitemap = path.join(dist, "sitemap.xml");
      if (!fs.existsSync(shellPath) || !fs.existsSync(sitemap)) return;
      const shell = fs.readFileSync(shellPath, "utf8");
      const routes = [...fs.readFileSync(sitemap, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map((m) => m[1].replace(BASE, "") || "/");
      const nav = `<nav aria-label="Site"><ul>${routes
        .map((r) => `<li><a href="${r}">${label(r)}</a></li>`)
        .join("")}</ul></nav>`;
      for (const r of routes) {
        const url = BASE + (r === "/" ? "/" : r);
        const h1 = r === "/" ? "Epoxy Flooring St. Petersburg, FL" : `${label(r)} | EpoxyMasters`;
        const html = shell
          .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
          .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
          .replace(/<meta name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${url}" />`)
          .replace('<div id="root"></div>', `<div id="root"><h1>${h1}</h1>${nav}</div>`);
        const out = r === "/" ? shellPath : path.join(dist, r, "index.html");
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, html);
      }
    },
  };
}
