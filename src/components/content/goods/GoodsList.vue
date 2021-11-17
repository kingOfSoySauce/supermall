<template>
  <div class="goods">
    {{goods}}
    <goods-list-item></goods-list-item>
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
  components: { GoodsListItem },
}
</script>

<style scoped></style>
