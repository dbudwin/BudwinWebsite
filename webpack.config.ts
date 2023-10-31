/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin')

const webpack = require('webpack')
const path = require('path')
const url = require('url')

const distFolder = path.join(url.pathToFileURL('.').pathname, 'dist')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        sideEffects: true,
      },
      {
        test: [/\.s[ac]ss$/i],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        sideEffects: true,
      },
      {
        test: /\.(png|jpg|webp)$/i,
        type: 'asset',
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        },
      }),
      new UglifyJsPlugin({ sourceMap: true }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: distFolder,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.ejs',
      title: 'Drew Budwin\'s Personal & Professional Website',
      meta: {
        charset: { charset: 'utf-8' },
        description: 'Personal website for Drew Budwin describing my work history and professional experience.',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new CopyPlugin({
      patterns: [{
        from: 'src/static/404.html',
        to: '404.html',
      },
      {
        from: 'src/static/robots.txt',
        to: 'robots.txt',
      },
      ],
    }),
    new FaviconsWebpackPlugin({
      cache: true,
      logo: './src/images/DrewCartoonNoBackground.png',
      inject: true,
    }),
    new MiniCssExtractPlugin(),
    new HtmlCriticalWebpackPlugin({
      base: distFolder,
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      dimensions: [ // Dimensions for common device screen sizes
        {
          width: 375,
          height: 667,
        },
        {
          width: 390,
          height: 844,
        },
        {
          width: 393,
          height: 851,
        },
        {
          width: 820,
          height: 1180,
        },
        {
          width: 768,
          height: 1024,
        },
        {
          width: 1200,
          height: 900,
        },
      ],
      penthouse: {
        blockJSRequests: false,
      }
    }),
    new webpack.DefinePlugin({
      process: {env: {}}
    }),
  ],
  resolve: {
    extensions: [
      '.css',
      '.jpg',
      '.js',
      '.jsx',
      '.png',
      '.ts',
      '.tsx',
      '.webp',
    ],
    modules: ['node_modules', 'src/sass'],
  },
}
