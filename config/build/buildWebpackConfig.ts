import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    devtool: options.isDev ? 'inline-source-map' : undefined,

    entry: options.paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: 'chunk.[contenthash].js',
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: options.isDev ? buildDevServer(options) : undefined,
  }
}
