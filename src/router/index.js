import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';
import About from '../pages/About.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Detail',
      path: '/pokemon/:id',
      component: Detail,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
  ],
  mode: 'history',
});
