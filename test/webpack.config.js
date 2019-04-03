var path = require("path");
// var webpack = require("webpack");
var plugins = [];

// plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));

module.exports = [
  {
    entry: {
        index: path.resolve(__dirname, "browser", "index.spec.ts"),
        setup: path.resolve(__dirname, 'browser', 'setup.ts'),
    },
    output: {
      path: path.resolve(__dirname, "browser"),
      filename: "[name].js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    node: {
      fs: "empty"
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: [/node_modules/, /dist/],
          options: {
            configFileName: path.resolve(__dirname, "tsconfig.json"),
            useBabel: true,
            babelOptions: {
              presets: [
                [
                  "env",
                  {
                    targets: {
                      browsers: ["FireFox <= 52", "Explorer 10"]
                    }
                  }
                ]
              ],
              plugins: [
                "syntax-dynamic-import",
                "dynamic-import-node",
                "transform-object-rest-spread",
                "transform-runtime"
              ]
            }
          }
        }
      ]
    },

    plugins: plugins,
    devServer: {
      contentBase: path.join(__dirname, "browser"),
      compress: true,
      port: 9000,
    }
  }
];
