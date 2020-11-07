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
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
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
  plugins: ["react", "babel", "prettier", "testing-library", "jest-dom"],
  rules: {
    "react/display-name": [0, { ignoreTranspilerName: false }],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": ["node_modules"],
  },
};
