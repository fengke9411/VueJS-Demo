import VueRouter from 'vue-router'
import Vue from 'vue'
// import App from '../App'
import home from '../components/Home.vue'
import login from '../components/Login.vue'
Vue.use(VueRouter)

const test = { template: '<p>这是一个测试页面</p>' }

// 坑爹 routes 写成 routers就不行了
export default new VueRouter({
  routes: [
  // {path: '*', component: home},
    {path: '/', component: test},
    {path: '/home', component: home},
    {path: '/login', component: login},
    {path: '/test', component: test}
  ]
})
