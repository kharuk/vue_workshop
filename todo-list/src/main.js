import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import store from './store/index';

import en from './i18n/en.json';
import ru from './i18n/ru.json';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueI18n);

const i18n = new VueI18n({
  messages: {
    en,
    ru,
  },
  locale: 'en',
  fallbackLocale: 'en',
});

new Vue({
  vuetify,
  i18n,
  store: new Vuex.Store(store),
  render: (h) => h(App),
}).$mount('#app');
