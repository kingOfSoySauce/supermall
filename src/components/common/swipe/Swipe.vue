<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" width="100%" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      default: () => {
        return []
      },
      type: Array,
    },
  },
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  /* color: #fff; */
  /* font-size: 20px; */
  /* line-height: 150px; */
  /* text-align: center; */
  /* background-color: #39a9ed; */
}
</style>
