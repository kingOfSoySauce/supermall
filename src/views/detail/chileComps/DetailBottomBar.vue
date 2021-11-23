<template>
  <div class="detailBottomBar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="less" scoped>
.detailBottomBar {
  // border-bottom: solid 2px #000;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .bar-left {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    .icon {
      margin: 0 auto;
      display: block;
      width: 22px;
      height: 22px;
      background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
      background-size: 22px;
    }
    .service {
      background-position: 0 -54px;
    }
    .shop {
      background-position: 0 -98px;
    }
  }
  .bar-right {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    text-align: center;
    .cart {
      height: 49px;
      line-height: 49px;
      flex: 1;
      background-color: #ffde0f;
      border-bottom: solid 3px #ffde0f;
      border-top: solid 3px #ffde0f;
    }
    .buy {
      height: 49px;
      line-height: 49px;
      // border-bottom: solid 5px #ff789a;
      flex: 1;
      color: #fff;
      background-color: #ff789a;
      border-bottom: solid 3px #ff789a;
      border-top: solid 3px #ff789a;
    }
  }
}
</style>
