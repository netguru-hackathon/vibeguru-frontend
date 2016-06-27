var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    progress: true,
    colors: true,
    port: 8090,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8090',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee', '.scss']
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: false
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.cjsx?$/,
        loaders: ['coffee-loader', 'cjsx-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      },
      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader'
      },
      {
        test: /\.(scss)$/,
        loader: 'style!css!sass?sourceMap'
      }
    ]
  }
};
