<template>
    <van-swipe :autoplay="3000" class="detailSwipe">
      <van-swipe-item v-for="item in topImages" :key="item" class="item">
        <img :src="item" alt="" width="100%" @load="detailImgLoad"/>
      </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},

  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods:{
    detailImgLoad(){
      this.$bus.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped lang="less">
.detailSwipe{
  height: 350px;
  overflow: hidden;
  .item{
    display: flex;
    align-items:center;

  }
}
</style>
