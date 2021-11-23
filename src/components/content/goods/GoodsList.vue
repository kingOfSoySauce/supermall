<template>
  <div class="goods" ref="goods">
    <goods-list-item v-for="item in goods" :key="item.acm" :goodsItem="item" />
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
  computed: {},
  mounted() {},
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
