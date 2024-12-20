const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mavi",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    mode: webpackConfigEnv.standalone ? "development" : "production",
    entry: webpackConfigEnv.standalone ? "./src/standalone/main.tsx" : "./src/main.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/app.js",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
