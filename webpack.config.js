const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    examples: [
      './anemic-components/lib/ancui.js',
      './app/src/metrics.js',
      // './examples/src/examples-bar.js',
      // './examples/src/examples-ellipse.js',
      // './examples/src/examples-advanced.js',
    ],
  },


  plugins: [
    new CleanWebpackPlugin(['app/dist']),
  ],

  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'metrics.js',
    library: 'metrics',
  }
}
