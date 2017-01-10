<template>
  <div id="app">
    <login message='hello' icon='#457123'></login>
    <custdialog v-show="showdialog"></custdialog>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Login from './components/Login'
import custdialog from './components/Dialog'
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
  },
  computed: {
    showdialog () {
      return this.$store.state.showdialog
    }
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
