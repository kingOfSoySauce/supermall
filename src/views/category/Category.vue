<template>
  <div class="wrapper" ref="myWrapper">

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Category',
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.myWrapper, {
      
    })
  },
}
</script>

<style scoped lang="less">
.wrapper {
  height: 150px;
}
.content {
  background-color: pink;
  // overflow-y: scroll;
}
</style>
