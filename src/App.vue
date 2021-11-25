<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view :key="$route.path + $route.query.t"/>
    </keep-alive>
    <!-- 下方四个导航 -->
    <main-tab-bar v-if="showMainTabBar" />
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
  computed: {
    showMainTabBar() {
      const path = this.$route.path.split('/')[1]
      if (path == 'home' || path == 'category' || path == 'cart' || path == 'profile') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="less">
@import 'assets/css/base.css';
router-view {
  padding-bottom: 100px;
}
</style>
