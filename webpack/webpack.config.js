const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
        },
      },
      /* {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          pulicPath: './dist/',
          name: '[name].[ext]?[hash]',
        },
      }, */
    ],
  },
};
