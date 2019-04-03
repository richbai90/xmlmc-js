var path = require('path');
var plugins = [];

module.exports = [{
    mode: 'none',
    entry: './src/browser/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist', 'browser'),
        filename: 'index.min.js',
        library: 'xmlmc',
        libraryTarget: 'umd',
    },
    optimization: {
        minimize: true
      },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/, options: {
                useBabel: true,
                babelOptions: {
                    "presets": [
                        [
                            "env",
                            {
                                "targets": {
                                    "browsers": [
                                        "FireFox <= 52",
                                        "Explorer 10"
                                    ]
                                }
                            }
                        ]
                    ],
                    "plugins": [
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
}];
