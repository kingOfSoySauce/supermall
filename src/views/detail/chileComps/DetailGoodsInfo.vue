<template>
  <div v-if="detailInfo !== null">
    <!-- {{ detailInfo }} -->
    <!-- 描述 -->
    <p class="desc">{{ detailInfo.desc }}</p>

    <div v-for="(arr, i) in detailInfo.detailImage" :key="i" class="detailImage">
      <small-gray-bar></small-gray-bar>
      <h3>{{ arr.key }}</h3>
      <div v-for="(item, index) in arr.list" :key="index">
        <img :src="item" alt="" width="100%" @load="detailImgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
import SmallGrayBar from 'components/content/smallGrayBar/SmallGrayBar.vue'
export default {
  components: { SmallGrayBar },
  data() {
    return {}
  },
  props: {
    detailInfo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    detailImgLoad() {
      this.$bus.$emit('detailImgLoad')
    },
  },
}
</script>

<style lang="less" scoped>
.desc {
  padding: 20px;
}
.detailImage {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  h3 {
    margin: 0 auto;

    display: inline-block;
    font-weight: 500;
    font-size: 18px;
    margin: 45px 0 10px 0;
    padding: 8px;
    border-radius: 5px;
    border: solid 3px rosybrown;
  }
}
</style>
