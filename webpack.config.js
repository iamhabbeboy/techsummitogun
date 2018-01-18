const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'public/main.css'
})

function sassRules () {
  return [
    {
      test: /\.(sass|scss)$/,
      loader: extractSass.extract(['css-loader', 'sass-loader'])
    }
  ]
}

module.exports = {
  entry: [
    './resources/assets/sass/main.scss'
  ],
  output: {
    filename: 'public/app.js'
  },
  module: {
    rules: sassRules()
  },
  plugins: [
    extractSass
  ]
}
