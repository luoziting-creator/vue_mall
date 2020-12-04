import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.use(VueLazyload,{
  // 图片占位符
  // loading: require('../src/assets/img/common/placeholder.png')

})

// 安装toast
Vue.use(toast)

Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false
// 解决移动端300ms的延迟问题
FastClick.attach(document.body)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
