const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    host: 'tiplocal.studio',
    port: 9000,
    https: {
        key: './tiplocal.studio+1-key.pem',
        cert: './tiplocal.studio+1.pem'
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    // allowedHosts: [
    //     '.tiplocal.studio'
    // ],
    // disableHostCheck: true
    // allowedHosts: "all",
  },
};