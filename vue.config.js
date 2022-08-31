module.exports = {
    productionSourceMap: false,
    publicPath: '/vuex-shopping-cart/'
  },

module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
