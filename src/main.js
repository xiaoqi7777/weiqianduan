import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const appOptions={
  el:'#vue',// 挂载到父应用中的id为vue的标签中
  router,
  render(h) {
    return h(App)
  },
}

const vueLifeCycle =  singleSpaVue({
  Vue,
  appOptions
})
// 如果是父应用引用 子应用的路由以他为主
if(window.singleSpaNavigate){
  __webpack_public_path__ = 'http://localhost:10001/'
}else{
  delete appOptions.el;
  new Vue(appOptions).$mount('#app')
}

// 父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount
// 我们需要父应用加载子应用,将子应用打包成一个个lib库 给父应该使用


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

// 需要父应用加载子应用

// bootstrap mount unmount
// single-sap   single-sap-vue