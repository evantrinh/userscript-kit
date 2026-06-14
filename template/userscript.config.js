export default {
  entry: "./src/main.js",
  output: "./dist/myscript.user.js",

  meta: {
    name: "My Script",
    version: "1.0.0",
    author: "me",
    description: "desc",
    match: ["https://example.com/*",],
    // grant: [],
    // connect: [],
    // include: [],
    // icon: "",
    // downloadURL: "",
    // updateURL: "",
    // supportURL: "",
    // homepageURL: "",
    // namespace: "",
    // runAt: "document-idle",
    // license: "",
  },

  devMode: {
    hmr: "websocket",
    reloadAll: true,
  },
};
