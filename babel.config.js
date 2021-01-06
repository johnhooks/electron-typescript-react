module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          electron: 11,
        },
        exclude: ["transform-regenerator"],
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-optional-chaining",
  ],
};
