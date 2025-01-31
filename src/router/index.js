import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import team from '../views/TeamView.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView,
    number:0
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyProjects.vue'),
    number:1
  },
  {
    path:'/team',
    name:'team',
    component:team,
    number:2
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
