<template>
  <div class="cart-container">
    <!-- 顶部导航 -->
    <nav-bar class="topBar">
      <template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>

    <scroll class="content" ref="scroll" @scroll="pageScroll" :probeType="3">
      <!-- 购物车列表 -->
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="bottomBar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import { mapGetters } from 'vuex'
import CartList from './childComps/CartList.vue'
import Scroll from '../../components/common/scroll/scroll.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  components: { NavBar, CartList, Scroll, CartBottomBar },
  name: 'Cart',
  computed: {
    ...mapGetters(['cartLength']),
  },
  methods: {
    //页面滑动
    pageScroll() {},
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
}
</script>

<style lang="less" scoped>
.cart-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(241, 240, 240);

  .topBar {
    background-image: linear-gradient(to right, #ff8198, #f76c85);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
     position: relative;
     z-index: 10;
  }
  .content {
    height: calc(100% - 44px - 50px - 40px);
    overflow: hidden;
  }
  .bottomBar {
  }
}
</style>
