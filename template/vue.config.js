module.exports = {
  devServer: {
    proxy: { // 代理
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
