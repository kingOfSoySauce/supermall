<template>
  <div class="cart-container">
    <nav-bar class="topBar">
      <template v-slot:center >
        <div >购物车({{}})</div>
      </template>
    </nav-bar>
    123
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'Cart',
}
</script>

<style lang="less" scoped>
.cart-container {
  background-color: pink;
  height: 100px;
  .topBar{
    background-color: #FF8E96;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
