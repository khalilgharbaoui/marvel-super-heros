var path = require('path');
var webpack = require('webpack');


module.exports = {
  mode: 'production',

  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

  ],

    module: {
      rules: [{
          test: /\.jsx?/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.woff2?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {
          test: /\.ttf$/,
          loader: "file-loader"
        },
        {
          test: /\.eot$/,
          loader: "file-loader"
        },
        {
          test: /\.svg$/,
          loader: "file-loader"
        },
        {
          test: /\.gif$/,
          loader: "file-loader"
        },
        {
          test: /\.(jpe?g|png)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    }
};
