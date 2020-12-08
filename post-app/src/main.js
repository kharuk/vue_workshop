import Vue from 'vue';
import Vuex from 'vuex';

import vuetify from './plugins/vuetify';
import storeConfig from './store/index';
import { auth } from './firebase';
import i18n from './configs/i18n';
import router from './configs/routes';

import App from './App.vue';
import './assets/scss/app.scss';

Vue.config.productionTip = false;
Vue.use(Vuex);

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      i18n,
      store: new Vuex.Store(storeConfig),
      router,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
