const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin') // Ding

module.exports = {
  entry: './server/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/server'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react'
            ]
          }
        }
      }
    ]
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    new NodemonPlugin({
      // If using more than one entry, you can specify
      // which output file will be restarted.
      script: './build/server/index.js',
      watch: path.resolve('./build/server'),
      ext: 'js,jsx,json,ts,tsx,'
    })
  ]
}
