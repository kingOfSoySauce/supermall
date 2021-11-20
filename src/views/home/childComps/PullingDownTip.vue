<template>
  <div class="pullingDownTip">
    <!-- 下拉阶段 -->
    <div class="box" v-if="showTip">
      <span class="text">下拉刷新</span>
      <span class="down">⬇️</span>
    </div>

    <!-- 下拉到尽头阶段 -->
    <div class="box" v-else>
      <span class="text">松手刷新</span>
      <span class="down">⌛</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    showTip() {
      return this.getThreshold === 'enterThreshold' ? true : false
    },
      ...mapGetters(['getThreshold']),
  },
}
</script>

<style scoped lang="less">
/* .pullingDownTip {
} */
.box {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  .text{
    flex:1
  }
}
</style>
