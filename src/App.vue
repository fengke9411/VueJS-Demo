<template>
  <div id="app">
    <login message='hello' icon='#457123'></login>
    <custdialog v-show="false"></custdialog>
    {{stateA}}{{count}}
    <router-link to="login">路由</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Login from './components/Login'
import custdialog from './components/Dialog'
// import {routerView, routerLink} from 'vue-router'
// import mapState from 'vuex'
export default {
  name: 'app',
  // store: store,
  data: function () {
    return {
      // showdialog: false
    }
  },
  components: {
    Hello,
    Login,
    custdialog
    // routerView,
    // routerLink
  },
  computed: {
    localComputed () {},
    testGetters () {
      return this.$store.getters.testGetters
    },
    stateA () {
      return this.$store.state.stateA
    },
    count () {
      return this.$store.state.count
    }
    // ...mapState({
    //   showdialog: 'showdialog'
    //   // ...
    // })
  },
  methods: {
    'show-dialog': function (msg) {
      console.log('events' + msg)
      // this.showdialog = true
    }
  }
}
</script>

<style>
#app {
  position: float;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  font-size: 16px;
  padding: 0 0 0 0;
  height: 100%;

}
</style>
