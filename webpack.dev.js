const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = function (env, argv) {
  return {
    context: path.resolve(__dirname, "./"),

    mode: "development",

    entry: {
      bundle: [
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
        path.resolve(__dirname, "src", "index.js"),
      ],
    },

    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      filename: "[name]~[hash:10].js",
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        },
      ],
    },

    devtool: "eval-source-map",

    devServer: {
      contentBase: path.join(__dirname, "build"),
      hot: true,
      open: true,
      compress: true,
      historyApiFallback: true,
      watchOptions: {
        ignore: /node_modules/,
      },
    },

    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.AutomaticPrefetchPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([path.resolve(__dirname, "node_modules")]),
      new HtmlWebpackPlugin({
        title: "Save Pets",
        template: "./public/index.ejs",
      }),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, "src", "assets", "icons", "favicon.png"),
        cache: "./.cache",
        prefix: "static/images/",
        favicons: {
          appName: "SavePets",
          appShortName: "pets",
          appDescription: "Save Pets Org",
          developerName: "eduardo-kohn",
          developerURL: "https://github.com/eagle-head",
          dir: "auto",
          lang: "pt-BR",
          background: "#AAA",
          theme_color: "#BBB",
          display: "standalone",
          appleStatusBarStyle: "black-translucent",
          orientation: "portrait",
          start_url: "./?utm_source=homescreen",
          scope: ".",
          version: "0.0.1",
          logging: false,
          icons: {
            favicons: true,
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            firefox: false,
            windows: false,
            yandex: false,
          },
        },
      }),
    ],
  };
};
