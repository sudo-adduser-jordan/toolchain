// Vercel Deploy Build Config

import * as esbuild from "esbuild";
import fs from "node:fs";

// build config
let result = await esbuild.build({
  entryPoints: ["./src/index.html", "./src/favicon.ico", "./src/index.tsx"],
  loader: {
    ".html": "copy",
    ".ico": "copy",
    ".png": "file",
    ".svg": "file",
  },
  bundle: true,
  sourcemap: false,
  minify: true,
  metafile: true,
  outdir: "./public",
  logLevel: "info",
});

fs.writeFileSync("./public/meta.json", JSON.stringify(result.metafile));
console.log(await esbuild.analyzeMetafile(result.metafile));
