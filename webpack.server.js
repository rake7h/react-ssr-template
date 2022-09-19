const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './server/index.js',
  mode: 'development',
  output: {
    path: path.resolve('./build/server'),
    publicPath: '',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
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
    // new ModuleFederationPlugin({
    //   name: 'host_app',
    //   library: { type: 'umd' },
    //   remotes: {
    //     commonHeader: path.resolve(__dirname, '../poc-styled-component/build/server/serverRemoteComponents.js')
    //   }
    //   //    shared: ['react', 'react-dom']
    // })
  ],
  externals: [
    nodeExternals()
  ]
}
