import esBuild from "esbuild";



// bundle react app
const ctx = await esBuild.context({
    entryPoints: ['./src/index.html', './src/main.tsx'],
    loader: {'.html': 'copy'},
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outdir: "./toolchain/dev/",
    banner: {
        js: "(() => { (new EventSource(\"/esbuild\")).addEventListener('change', () => location.reload()); })();"
    },
    logLevel: "info"
});

// serve app to port @ host
await ctx.serve({ 
    servedir: "./toolchain/dev/", 
    port: 8080 
})
.then(console.log("Server running...\n http://localhost:8080"))
.catch("Server error.");

// watch src dir for changes
await ctx.watch();
