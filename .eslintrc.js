module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: "./babel.config.js",
    },
    ecmaVersion: 11,
    sourceType: "module",
    allowImportExportEverywhere: true,
    codeFrame: true,
  },
  plugins: ["react", "babel", "prettier"],
  rules: {
    "react/display-name": [0, { ignoreTranspilerName: false }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      webpack: {
        config: "webpack/webpack.common.js",
      },
      node: {
        paths: ["src"],
      },
    },
    "import/ignore": ["node_modules"],
  },
};
