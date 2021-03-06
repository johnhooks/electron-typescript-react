const path = require("path");
const webpack = require("webpack");

const rootPath = path.resolve(__dirname, "..");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
  entry: {
    main: path.resolve(rootPath, "app", "main.ts"),
  },
  target: "electron-main",
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
  plugins: [
    new webpack.ExternalsPlugin("commonjs", ["electron-devtools-installer"]),
  ],
  optimization: {
    minimize: false,
  },
};
