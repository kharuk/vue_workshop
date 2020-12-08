import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Login from '../pages/Login';
import { auth } from '../firebase';

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

const router = new VueRouter({
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

export default router;
