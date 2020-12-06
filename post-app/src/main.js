import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';

import vuetify from './plugins/vuetify';
import storeConfig from './store/index';
import { auth } from './firebase';

import en from './i18n/en.json';
import ru from './i18n/ru.json';

import App from './App.vue';

import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';
import Login from './components/pages/Login';
import './assets/scss/app.scss';

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
  {
    path: '/posts',
    component: Posts,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/posts/:id',
    component: Post,
    meta: {
      requiresAuth: true,
    },
  },
  { path: '/login', component: Login },
];
export const router = new VueRouter({
  routes,
  mode: 'history',
});

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

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
