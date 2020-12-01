const path = require("path");

const rootPath = path.resolve(__dirname, "..");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // devtool: "source-map",
  entry: {
    preload: path.resolve(rootPath, "app", "preload.ts"),
  },
  target: "electron-preload",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(rootPath, "build"),
    filename: "[name].js",
  },
};
