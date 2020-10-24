module.exports = {
  "src/**/*.js": [
    "prettier --write",
    "eslint --cache --fix",
    "jest --bail --findRelatedTests",
  ],
};
