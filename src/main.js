import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//引入ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false
//创建全局bus
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')