<template>
  <div id="register">

    hello register{{this.$route.params.mobile}}
    {{mobilea}}
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'register',
    date: () => {
      // body...
      return {
        mobile: ''
      }
    },
    computed: {
      mobilea () {
        return this.$route.params.mobile
      }
    },
    created: () => {
      // this.mobile = this.$route.params.mobile
      // console.log('route = ' + this.$route.params.mobile)
    },
    mounted: () => {
      console.log('route = ' + this.$route.path)
    }

  }

</script>

<style type="text/css" scoped>
  #register{
    height: 100%;
    background-color: #666666;
  }
  
</style>