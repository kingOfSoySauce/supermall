<template>
  <div class="goods" ref="goods">
    <!-- {{goods}} -->
    <!-- <div class="item"> -->
    <goods-list-item v-for="item in goods" :key="item.iid" :goodsItem="item" />
    <!-- </div> -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    goods1() {
      return this.goods.slice(0, this.goods.length / 2)
    },
    goods2() {
      return this.goods.slice(this.goods.length / 2, this.goods.length)
    },
  },
  mounted() {
    console.log(this.$refs.goods.clientHeight)
  },
  components: { GoodsListItem },
}
</script>

<style scoped lang="less">
.goods {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-start;

  background-color: rgb(241, 241, 241);
  // height:50%;
}
</style>
