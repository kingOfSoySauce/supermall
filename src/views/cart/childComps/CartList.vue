<template>
  <div class="cart-list">
    <cart-list-item v-for="(item) in cartList" :product="item" :key="item.iid"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem },
  computed: {
    ...mapGetters(['cartList']),
  },

}
</script>

<style lang="less" scoped>
.cart-list {

  padding: 10px;
}
</style>
