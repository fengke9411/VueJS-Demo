<template>
  <div id="maskmain">
    <router-view></router-view>
    <div id="footer">
      <router-link to="/home/subhome">
        <img src="../assets/home_tab1.png" />
        <p>首页</p>
      </router-link>
      <router-link to="/home/billpage">
        <img src="../assets/home_tab2.png"/>
        <p>账单</p>
      </router-link>
      <router-link to="/home/myinfoPage">
        <img src="../assets/home_tab3.png"/>
        <p>发现</p>
      </router-link>
      <router-link to="/home/findpage">
        <img src="../assets/home_tab4.png" />
        <p>我的</p>
      </router-link>
    </div>
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

<style type="text/css" scoped>
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
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#footer{
  position: fixed;
  width: 100%;
  height: 4em;
  background-color: #dddddd;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

#footer a{
  flex: 1;
  text-align: center;
}


#footer img{
  width: 1.5em;
  height: 1.5em;
}
#footer p{
  background-color: red;
  margin: 0;
  padding: 0;
  font-size: 0.8em; 
}
</style>