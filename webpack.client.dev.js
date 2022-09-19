const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/client'),
    publicPath: '/build/client/',
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
        remoteComponents: 'remoteComponents@http://localhost:3000/remoteEntry.js'
      }
    })
  ]
}
