module.exports = {
  devServer :{
    port:10000,
    headers:{
      'Access-control-Allow-Origin':'*'
    }
  },
  configureWebpack:{
    output:{
      library:'vueApp',
      libraryTarget:'umd'
    }
  }
}