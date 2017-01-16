// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router/router'
// import VueRouter from 'vue-router'
/* eslint-disable no-new */
// router.start(App, '#app')
// Vue.use(VueRouter)
// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount('#app')
// router.push('/login')
// router.start(App, '#app')
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  created: () => {
    console.log('main created...')
  },
  mounted: () => {
    console.log('main mounted...')
    // router.push('/test')
  },
  updated: () => {
    console.log('main updated...')
  }
})
// router.push('/test')
