import VueRouter from 'vue-router'
import Vue from 'vue'
// import App from '../App'
import home from '../components/Home.vue'
import login from '../components/Login.vue'
Vue.use(VueRouter)
const routers = [
  // {path: '*', component: home},
  // {path: '/', component: App},
  {path: 'home', component: home},
  {path: 'login', component: login}
]

const router = new VueRouter({
  routers
})
export default router
