const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    examples: [
      './anemic-components/lib/ancui.js',
      './public/js/inline-common.js',
      './public/js/inline-app.js',
      './public/js/inline-process-data.js',
      './public/js/inline-team-velocity.js',
      './public/js/inline-team-summary.js',
      './public/js/inline-sprint-metrics.js',
      './public/js/inline-estimates.js',
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
