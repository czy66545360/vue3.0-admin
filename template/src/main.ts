import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 路由配置
import store from './store'; // vuex
import iView from 'iview'; // ui 框架
import 'iview/dist/styles/iview.css'; // ui 框架CSS
import '@/filter'; // 过滤器
import utils from '@/utils'; // 工具包
import '@/flyio'; // jajax

Vue.use(iView, {
  transferL: false,
  // size: 'small',
});

Vue.config.productionTip = false;

new Vue({
  $utils: utils,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
