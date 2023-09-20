import path from 'path'
import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildPaths, BuildEnv } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    build: path.resolve(__dirname, 'bundle'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }
  const mode = env.mode || 'development'

  const PORT = env.port || 3000
  const isDev = mode === 'development'
  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode: mode,
    isDev,
    port: PORT,
  })
  return config
}
