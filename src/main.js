import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
Vue.config.productionTip = false


import {registerMicroApps,start} from 'qiankun'
const apps = [
  {
    name:'vueApp',
    // 默认会加载这个html 解析里面的js 动态执行(子应用必须支持跨域)
    entry:'//localhost:10001',
    container:"#vue",
    activeRule:'/vue',
    props:{a:1}
  },
  {
    name:'reactApp',
    entry:'//localhost:20000',
    container:'#react',
    activeRule:'/react'
  }
]
registerMicroApps(apps)
start()
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
