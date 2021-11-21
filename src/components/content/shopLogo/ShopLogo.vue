<template>
  <span class="box">
    <img :src="src" alt="" :style="'width:' + logoWidth + 'px'" />
  </span>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    logoWidth: {
      type: Number,
      default: 65,
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  display: inline-block;
  border-radius: 50%;

  border: solid 2px #efefef;
  overflow: hidden;
}
</style>
