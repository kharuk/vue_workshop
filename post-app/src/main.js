import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';

import vuetify from './plugins/vuetify';
import store from './store/index';

import en from './i18n/en.json';
import ru from './i18n/ru.json';

import App from './App.vue';

import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

const i18n = new VueI18n({
  messages: {
    en,
    ru,
  },
  locale: 'en',
  fallbackLocale: 'en',
});

Vue.use(VueRouter);
const routes = [
  { path: '/', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: Post },
];
const router = new VueRouter({
  routes,
});

new Vue({
  vuetify,
  i18n,
  store: new Vuex.Store(store),
  router,
  render: (h) => h(App),
}).$mount('#app');
