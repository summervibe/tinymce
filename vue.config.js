const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      extensions: ['.css'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    }
  },
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: '8080',
    open: true,
    proxy: {
      '/api': {
        target: 'http://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}