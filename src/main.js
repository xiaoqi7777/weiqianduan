import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {registerApplication,start} from 'single-spa'

Vue.config.productionTip = false

async function loadScript(url){
  return new Promise((res,rej)=>{
    let script = document.createElement('script')
    script.src = url;
    script.onload = res;
    script.onerror = rej;
    document.head.appendChild(script)
  })
}

//  singleSpa 缺陷 不够灵活 不能动态加载js文件
//  样式不隔离 没有js沙箱的机制

registerApplication('myuepp',async ()=>{
    console.log('加载模块')
    await loadScript('http://localhost:10001/js/chunk-vendors.js');
    await loadScript('http://localhost:10001/js/app.js');
    return window.singleVue // bootStrap mount unmount
  },
  // 用户切换到/vue 的路径下,我需要加载刚才定义的子应用
  location => location.pathname.startsWith('/vue'),
  {}
)
start();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
