const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    fallback: { "https": require.resolve("https-browserify"),
    "querystring": require.resolve("querystring-es3"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url/"),
    "buffer": require.resolve("buffer/")  }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          },
          
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
    }
    ]
  },
  devtool: 'source-map'
};