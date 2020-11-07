module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.7",
        targets: {
          esmodules: false,
          node: "current",
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-template-literals"],
    ["@babel/plugin-transform-arrow-functions", { spec: true }],
    ["transform-class-properties", { spec: true }],
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-syntax-dynamic-import"],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/core",
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "core",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/icons",
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "icons",
    ],
  ],
};
