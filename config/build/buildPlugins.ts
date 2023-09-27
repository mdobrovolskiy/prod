import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins(
    options: BuildOptions
): webpack.WebpackPluginInstance[] {
    const plugins = [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.DefinePlugin({
            __ISDEV__: JSON.stringify(options.isDev),
        }),
    ]
    if (options.isDev) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    return plugins
}
