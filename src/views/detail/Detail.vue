<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import { getDetailData } from 'network/detail'
import DetailNavBar from './chileComps/DetailNavBar.vue'
import DetailSwiper from './chileComps/DetailSwiper.vue'
export default {
  name:'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.id

    //2.请求数据
    this.getDetailData()
  },
  methods: {
    async getDetailData() {
      const { data: res } = await getDetailData(this.iid)
      // console.log(res)
      // console.log(res.result.itemInfo.topImages);
      this.topImages = res.result.itemInfo.topImages
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
  },
}
</script>

<style></style>
