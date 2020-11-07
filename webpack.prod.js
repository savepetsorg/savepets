const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require("dotenv").config({
  path: `${__dirname}/.env.production`,
});

// eslint-disable-next-line
module.exports = (function (env, argv) {
  return {
    context: path.resolve(__dirname, "./"),

    mode: "production",

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
      filename: "static/js/[name]~[hash:10].js",
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader",
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          exclude: /(fonts|node_modules)/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name]~[hash:10].[ext]",
                outputPath: "static/images/",
              },
            },
          ],
        },
      ],
    },

    resolve: {
      alias: {
        "react-dom$": "react-dom/profiling",
        "scheduler/tracing": "scheduler/tracing-profiling",
      },
    },

    devtool: "source-map",

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          cache: true,
          parallel: 4,
          extractComments: (astNode, comment) => {
            if (/@extract/i.test(comment.value)) {
              return true;
            }
            return false;
          },
        }),
      ],
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },

    plugins: [
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new webpack.AutomaticPrefetchPlugin(),
      new webpack.DefinePlugin({
        "process.env": dotenv.parsed,
      }),
      new HtmlWebpackPlugin({
        title: "Save Pets",
        template: "./public/index.ejs",
      }),
      new CopyPlugin({
        patterns: [{ from: "./public/robots.txt", to: "./" }],
      }),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, "src", "assets", "images", "favicon.png"),
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
})();
