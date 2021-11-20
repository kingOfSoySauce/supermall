<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <!-- 下方四个导航 -->
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
// import Home from 'views/home/Home.vue'

export default {
  name: 'app',
  components: {
    MainTabBar,
  },
}
</script>

<style lang="less">
@import 'assets/css/base.css';
router-view {
  padding-bottom: 100px;
}
</style>
