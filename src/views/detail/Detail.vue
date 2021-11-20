<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import { getDetailData, Goods } from 'network/detail'
import DetailNavBar from './chileComps/DetailNavBar.vue'
import DetailSwiper from './chileComps/DetailSwiper.vue'
import DetailBaseInfo from './chileComps/DetailBaseInfo.vue'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null,
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
      const data = res.result
      console.log(data)
      this.topImages = data.itemInfo.topImages

      //整合标题信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
}
</script>

<style></style>
