<template>
  <div id="app" class="wrapper">
    <router-view/>
    <main-tab-bar/> 
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
// import Home from 'views/home/Home.vue'

export default({
  name: 'app',
  components:{
    MainTabBar,
  }
})
</script>


<style lang="less">
@import "assets/css/base.css";
</style>
