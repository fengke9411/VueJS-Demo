<template>
  <div id="maskmain">
    <div></div>
    <div id="content">这是home页面</div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data: () => {
      return {
      }
    }
  }

</script>

<style type="text/css">
#maskmain{
  width: 100%;
  height: 100%;
  text-align: center;

}
#maskmain:first{
  background-color: #999999;
  opacity: 0.5;

}
#content{
  position: fixed;
  top: 25%;
  left: 35%;
  background-color: #ffffff;
  border-color: #666666;
  border-radius: 2em;
  width: 30%;
  height: 50%;
  font-size: 5em;
}

</style>