const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Brafé',
      inject: true,
      chunks: ['main'],
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'estudo.html',
      template: './src/templates/estudo.html',
      title: 'Estudo',
      inject: true,
      chunks: ['vendor'],
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style[chunkhash].css'
    })
  ],
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-transform-runtime']
            ]
          }
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images'
          }
        }
      }
    ]
  }
}