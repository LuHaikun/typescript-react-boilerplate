const webpack = require('webpack')
const detect = require('detect-port')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const os = require('os')
const { DIST_PATH } = require('./paths')

function getIpAddress () {
  const interFaces = os.networkInterfaces()
  let ipAddress = 'localhost'
  for (const k in interFaces) {
    const item = interFaces[k]
    for (let i = 0; i < item.length; i++) {
      const interFace = item[i]
      if (interFace.address === '127.0.0.1' || interFace.family !== 'IPv4') continue
      ipAddress = interFace.address
    }
  }
  return ipAddress
}

// 仅在分析构建速度时打开 SpeedMeasurePlugin 插件, 开启时热更新失效，开发过程中关闭
const isNeedSpeed = false
const smp = new SpeedMeasurePlugin()
const ipAddress = getIpAddress()
const config = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', // 打包前的代码，便于调试3
  devServer: {
    contentBase: DIST_PATH, // 运行代码的目录
    compress: true, // 启动 gzip 压缩
    hot: true, // 开启HMR功能,当修改了webpack配置，新配置要想生效，必须重新webpack服务
    // overlay: false, // 如果出错了，不要全屏提示~
    inline: true, // 可以监控js变化
    clientLogLevel: 'none',
    stats: 'minimal', // 输出部分信息~
    // quiet: true, // 除了一些基本启动信息以外，其他内容都不要显示
    host: ipAddress // 域名
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
})

const devConfig = isNeedSpeed ? smp.wrap(config) : config

// 自动检测非占用端口号
let defaultPort = 8080
module.exports = new Promise((resolve, reject) => {
  detect(defaultPort, (err, _port) => {
    if (err) {
      reject(err)
      return
    }

    if (defaultPort !== _port) {
      defaultPort = _port
    }
    // 端口被占用时就重新设置devServer的端口
    devConfig.devServer.port = defaultPort
    resolve(devConfig)
    console.log(`Starting server on ${ipAddress}:${defaultPort}`)
  })
})
