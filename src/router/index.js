import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ចាប់ផ្តើម',
    component: () => import(/* webpackChunkName: "about" */ '../ការមើលឃើញ/អំពិយើង.vue')
  },
  {
    path: encodeURI('/អំពិយើង'),
    name: 'អំពិយើង',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ambiyerng" */ '../ការមើលឃើញ/អំពិយើង.vue')
  },
  {
    path: encodeURI('/កម្រោងស្រាវជ្រាវ'),
    name: 'កម្រោងស្រាវជ្រាវ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kamrong" */ '../ការមើលឃើញ/កម្រោងស្រាវជ្រាវ.vue')
  },
  {
    path: encodeURI('/ក្រុមស្រាវជ្រាវ'),
    name: 'ក្រុមស្រាវជ្រាវ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "krom" */ '../ការមើលឃើញ/ក្រុមស្រាវជ្រាវ.vue')
  },
  {
    path: encodeURI('/ទំនាក់ទំនង'),
    name: 'ទំនាក់ទំនង',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tomneak" */ '../ការមើលឃើញ/ទំនាក់ទំនង.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
