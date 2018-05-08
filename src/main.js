// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl';
import Axios from '../static/js/http';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件

Vue.use(MintUI);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
