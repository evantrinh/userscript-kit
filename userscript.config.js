export default {
  entry: "./src/main.js", // entry point (esbuild follows imports from here recursively)
  output: "./dist/myscript.user.js", // output path for compiled userscript

  meta: {
    name: "My Script",
    
    version: "1.0.0",
    author: "me",
    description: "desc",
    match: [
      // can be a string or an array of strings
      "https://example.com/*",
    ],
    // grant: [
    //   // list every GM_API you use
    //   "GM_getValue",
    //   "GM_setValue",
    //   // 'GM_addStyle',
    // ],
    // connect: [
    //     // list every domain you GM_xmlhttpRequest to
    //     "example.com",
    // ],
    // include: [
    //     // can be a string or an array of strings
    //     "https://example.com/*",
    // ],
    // icon: "",
    // downloadURL: "",
    // updateURL: "",
    // supportURL: "",
    // homepageURL: "",
    // namespace: "",
    // runAt: "document-idle",
    // license: "",
  },

  // optional: dev mode config
  devMode: {
    // 'websocket' (default) - auto-reloads tab on save via websocket
    // 'polling'             - fallback for sites with strict CSP
    hmr: "websocket",
    // true  - reload all open tabs on save (default)
    // false - reload only the most recently connected tab
    reloadAll: true,
  },
};
