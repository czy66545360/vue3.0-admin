import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { // 登陆页
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
    },
    { // 框架
      path: '/',
      name: 'frame',
      component: () => import('../views/frame/index.vue'),
      children: [
        { // 首页
          path: '/home',
          name: 'home',
          component: () => import('../views/home/index.vue'),
        },
        { // 客户列表
          path: '/passenger',
          name: 'passenger',
          component: () => import('../views/passenger/index.vue'),
        },
        { // 客户信息
          path: '/passenger/form',
          name: 'passenger/form',
          component: () => import('../views/passenger/form.vue'),
        },
      ],
    },
    // {
    //   path: '/login',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    { // 重定向
      path: '*',
      redirect: '/home',
    },
  ],
});
