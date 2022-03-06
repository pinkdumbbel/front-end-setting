const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    //로더는 파일별로 처리 하기 때문에 test에 해당하는 파일들을 전부 로더를 돌림
    rules: [
      /* {
        test: /\.js$/,
        use: [path.resolve('./webpack-loader.js')],
      }, */
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
          limit: 20000, //kb
        },
        /* use: ['file-loader'], */
      },
    ],
  },
};
