<template>
  <div class="mainTabBar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon><van-icon name="goods-collect-o" size="30"/></template>
        <template v-slot:item-icon-active><van-icon name="goods-collect" size="30" color="#FF8198"/></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon><van-icon name="shop-o" size="30"/></template>
        <template v-slot:item-icon-active><van-icon name="shop" size="30" color="#FF8198"/></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon><van-icon name="cart-o" size="30"/></template>
        <template v-slot:item-icon-active><van-icon name="cart" size="30" color="#FF8198"/></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon><van-icon name="user-o" size="30"/></template>
        <template v-slot:item-icon-active><van-icon name="manager" size="30" color="#FF8198"/></template>
        <template v-slot:item-text> <div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style scoped>
.mainTabBar{
  position: relative;
  z-index: 99;
}

</style>
