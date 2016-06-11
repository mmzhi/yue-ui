// main.js
import Vue from 'vue'
import Yue from 'yue-ui'

import App from './page/index.vue'

Vue.use(Yue);

new Vue({
  el: 'body',
  components: {
    app: App
  }
})