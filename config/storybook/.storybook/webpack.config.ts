
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path';
module.exports = async ({ config }) => {
 
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
         MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName:
                         '[name]__[local]'
                        
                }
            }
        },
        'sass-loader'
    ]
});
config.resolve.modules = [
  ...(config.resolve.modules || []),
  path.resolve(__dirname, "../../../src/"),
];
config.plugins.push(new MiniCssExtractPlugin({
  filename: 'css/[name].[contenthash:8].css'
  
}),)

  // Return the altered config
  return config;
};
