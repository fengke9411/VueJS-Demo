<template>
  <div id="app">
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

  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  font-size: 16px;
  padding: 0 0 0 0;
  height: 100%;
  background-color: #efefef;
}
  @media screen and (max-width:960px) {
    #app{
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width:960px) {
    #app{
      width: 60%;
      height: 100%;
  }
  }
</style>
