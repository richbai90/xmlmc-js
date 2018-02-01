var path = require('path');
var webpack = require('webpack');
var plugins = [];

//plugins.push(new DtsBundlePlugin());
plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));

module.exports = [{
    target: 'web',
    entry: './src/browser/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist', 'browser'),
        filename: 'index.min.js'
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
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/, options: {
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
                        "transform-object-rest-spread"
                    ]
                }
            } }
        ]
    },

    plugins: plugins,
}];

function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function(){
        var dts = require('dts-bundle');

        dts.bundle({
            name: 'xmlmc',
            main: 'dist/XmlMethodCall.d.ts',
            out: 'index.d.ts',
            removeSource: true,
            outputAsModuleFolder: true // to use npm in-package typings
        });
    });
};
