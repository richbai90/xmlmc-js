var path = require('path');
var webpack = require('webpack');
var plugins = [];

plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = [{
    entry: './src/browser/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist', 'browser'),
        filename: 'index.min.js',
        library: 'xmlmc',
        libraryTarget: 'umd',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },

    externals: {
        'tough-cookie': 'CookieJar'
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
},
    {
        entry: './src/browser/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist', 'browser'),
            filename: 'index.js',
            library: 'xmlmc',
            libraryTarget: 'umd',
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: ['.ts', '.tsx', '.js']
        },

        externals: {
            'tough-cookie': 'CookieJar'
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

    },
    {
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: 'xmlmc',
            libraryTarget: 'umd',
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: ['.ts', '.tsx', '.js']
        },

        externals: {
            'tough-cookie': 'CookieJar'
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
                                        "node": "6.10"
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

    }];
