const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './client/index.js',
  mode: 'production',
  output: {
    path: path.resolve('./build/client'),
    publicPath: '',
    filename: 'index.js'
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
  plugins: [
    new ModuleFederationPlugin({
      name: 'host_app',
      remotes: {
        commonHeader: 'remoteComponents@http://localhost:3000/remoteEntry.js'
      }
    })
  ]
}
