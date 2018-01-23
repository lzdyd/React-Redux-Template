const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

require('babel-polyfill');

console.log('Dev build');

module.exports = {
  context: path.join(__dirname, '\\src'),

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './index'
  ],

  output: {
    path: path.join(__dirname, './public/assets/js'),
    publicPath: '/assets/js/',
    filename: 'bundle.js'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  resolve: {
    extensions: ['.js', 'jsx'],
    alias: {
      api: path.resolve(__dirname, 'src/services/api'),
      actions: path.resolve(__dirname, 'src/actions')
    }
  },

  devtool: 'cheap-inline-module-source-map',

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[path][name].[ext]'
    }]
  }
};
