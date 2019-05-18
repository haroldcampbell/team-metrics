const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    examples: [
      './anemic-components/lib/ancui.js',
      './public/js/metrics.js',
    ],
  },


  plugins: [
    new CleanWebpackPlugin(['public/dist']),
  ],

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'metrics.js',
    library: 'metrics',
  }
}
