const {merge} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        open: true
    }
})