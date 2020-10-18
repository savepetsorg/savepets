module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.6",
        targets: {
          esmodules: false,
          node: "current",
        },
      },
    ],
    ["@babel/preset-react"],
  ],
  plugins: [
    ["@loadable/babel-plugin"],
    ["@babel/plugin-transform-template-literals"],
    ["@babel/plugin-transform-arrow-functions", { spec: true }],
    ["transform-class-properties", { spec: true }],
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-syntax-dynamic-import"],
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          test: "./test",
          underscore: "lodash",
        },
      },
    ],
  ],
};
