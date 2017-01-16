import VueRouter from 'vue-router'
import Vue from 'vue'
// import App from '../App'
import home from '../components/Home.vue'
import subhome from '../components/SubHome.vue'
import billpage from '../components/BillPage.vue'
import findpage from '../components/FindPage.vue'
import myinfoPage from '../components/MyinfoPage.vue'
import login from '../components/Login.vue'
import register from '../components/Register.vue'
Vue.use(VueRouter)

const test = { template: '<p>这是一个测试页面</p>' }

// 坑爹 routes 写成 routers就不行了
export default new VueRouter({
  routes: [
  // {path: '*', component: home},
    {path: '/', redirect: '/home/subhome'},
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {path: 'subhome', component: subhome},
        {path: 'billpage', component: billpage},
        {path: 'findpage', component: findpage},
        {path: 'myinfoPage', component: myinfoPage}
      ]
    },
    {path: '/login', name: 'login', component: login},
    {path: '/test', name: 'test', component: test},
    {path: '/register', name: 'register', component: register}
  ]
})
