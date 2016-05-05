var webpack = require("webpack");
var path = require("path");
var rootPath = process.argv[3];

module.exports = {
    context: rootPath,
    entry: {
        app: [
            path.join(__dirname, "nativescript-angular-starter.js"),
            path.join(__dirname, "dist/require-override-starter.js"),
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        pathinfo: true,
        filename: "ns_bundle.js"
    },
    resolve: {
        root: rootPath,
        extensions: ["", ".js"],
        packageMains: ["main"],
        modulesDirectories: [
            "tns_modules"
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "global.__snapshot": true
        })
    ],
    node: {
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
    }
};
