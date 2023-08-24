const merge = require('webpack-merge');
const path = require('path');
const common = require('../../webpack.common');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'liyb.js',
    library: 'liyb',
    path: path.resolve(__dirname, './dist'),
  },
});
