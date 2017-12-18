import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import MuseUI from 'muse-ui';
import _ from 'lodash'; // eslint-disable-line no-unused-vars
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-carbon.css';
import App from './components/App.vue';
import { store } from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
// Load all Muse UI components.
// Can also load single ones in webpack.config, for better perfomance.
Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  http: {
    root: '/root',
    headers: {
      ContentType: 'application/json',
    },
  },
});
