'use strict';

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    {
        name: 'paddsync-umd',
        mode: 'production',

        context: `${__dirname}/../src/`,

        entry: {
            paddsync: './paddsync.js',
            'paddsync.min': './paddsync.js',
            'paddsync-arcade-physics': './paddsync-arcade-physics.js',
            'paddsync-arcade-physics.min': './paddsync-arcade-physics.js',
            'paddsync-ie9': './paddsync-ie9.js',
            'paddsync-ie9.min': './paddsync-ie9.js'
        },

        output: {
            path: `${__dirname}/../dist/`,
            filename: '[name].js',
            globalObject: 'this',
            library: {
                name: 'PADDsync',
                type: 'umd',
                umdNamedDefine: true,
            }
        },

        performance: { hints: false },

        optimization: {
            minimizer: [
                new TerserPlugin({
                    include: /\.min\.js$/,
                    parallel: true,
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false
                        },
                        compress: true,
                        ie8: false,
                        ecma: 5,
                        warnings: false
                    }
                })
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                "typeof CANVAS_RENDERER": JSON.stringify(true),
                "typeof WEBGL_RENDERER": JSON.stringify(true),
                "typeof WEBGL_DEBUG": JSON.stringify(false),
                "typeof EXPERIMENTAL": JSON.stringify(false),
                "typeof PLUGIN_3D": JSON.stringify(false),
                "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
                "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
                "typeof FEATURE_SOUND": JSON.stringify(true)
            }),

            new CleanWebpackPlugin()
        ]
    },
    {
        experiments: {
            outputModule: true,
        },

        name: 'paddsync-esm',
        mode: 'production',
        dependencies: [ 'paddsync-umd' ],

        context: `${__dirname}/../src/`,

        entry: {
            'paddsync.esm': './paddsync-esm.js',
            'paddsync.esm.min': './paddsync-esm.js'
        },

        output: {
            path: `${__dirname}/../dist/`,
            filename: '[name].js',
            library: {
                type: 'module'
            }
        },

        performance: { hints: false },

        optimization: {
            minimizer: [
                new TerserPlugin({
                    include: /\.min\.js$/,
                    parallel: true,
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false
                        },
                        compress: true,
                        ie8: false,
                        ecma: 6,
                        warnings: false
                    }
                })
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                "typeof CANVAS_RENDERER": JSON.stringify(true),
                "typeof WEBGL_RENDERER": JSON.stringify(true),
                "typeof WEBGL_DEBUG": JSON.stringify(false),
                "typeof EXPERIMENTAL": JSON.stringify(false),
                "typeof PLUGIN_3D": JSON.stringify(false),
                "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
                "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
                "typeof FEATURE_SOUND": JSON.stringify(true)
            })
        ]
    }
];
