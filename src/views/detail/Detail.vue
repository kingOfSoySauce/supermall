<template>
  <div id="detail" class="detail">
    <DetailNavBar class="detailNavBar"></DetailNavBar>
    <scroll class="content" ref="scroll" :pullUpLoad="false" :pullDownRefresh="false">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <small-gray-bar />
      <detail-shop-info :shop="shop"></detail-shop-info>
      <small-gray-bar />
      <datail-param-info :GoodsParam="GoodsParam"></datail-param-info>
      <small-gray-bar />
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <ul>
        <li>1li</li>
        <li>2li</li>
        <li>3li</li>
        <li>4li</li>
        <li>5li</li>
        <li>6li</li>
        <li>7li</li>
        <li>8li</li>
        <li>9li</li>
        <li>10li</li>
        <li>11li</li>
        <li>12li</li>
        <li>13li</li>
        <li>14li</li>
        <li>15li</li>
        <li>16li</li>
        <li>17li</li>
        <li>18li</li>
        <li>19li</li>
        <li>20li</li>
        <li>21li</li>
        <li>22li</li>
        <li>23li</li>
        <li>24li</li>
        <li>25li</li>
        <li>26li</li>
        <li>27li</li>
        <li>28li</li>
        <li>29li</li>
        <li>30li</li>
        <li>31li</li>
        <li>32li</li>
        <li>33li</li>
        <li>34li</li>
        <li>35li</li>
        <li>36li</li>
        <li>37li</li>
        <li>38li</li>
        <li>39li</li>
        <li>40li</li>
        <li>41li</li>
        <li>42li</li>
        <li>43li</li>
        <li>44li</li>
        <li>45li</li>
        <li>46li</li>
        <li>47li</li>
        <li>48li</li>
        <li>49li</li>
        <li>50li</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import { getDetailData, Goods, Shop, GoodsParam } from 'network/detail'
// import { debounce } from 'common/utils.js'

import SmallGrayBar from 'components/content/smallGrayBar/SmallGrayBar.vue'
import Scroll from 'components/common/scroll/scroll.vue'

import DetailNavBar from './chileComps/DetailNavBar.vue'
import DetailSwiper from './chileComps/DetailSwiper.vue'
import DetailBaseInfo from './chileComps/DetailBaseInfo.vue'
import DetailShopInfo from './chileComps/DetailShopInfo.vue'
import DetailGoodsInfo from './chileComps/DetailGoodsInfo.vue'
import DatailParamInfo from './chileComps/DatailParamInfo.vue'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      debounceTime: {},
      GoodsParam: {},
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
      //1.发送请求
      const { data: res } = await getDetailData(this.iid)
      const data = res.result
      //2.保存轮播图信息
      this.topImages = data.itemInfo.topImages

      //3.创建商品基础信息：标题、价格、销量收藏、物流
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //4.创建商家信息：头像名称
      this.shop = new Shop(data.shopInfo)

      //5.保存商品详情数据
      this.detailInfo = data.detailInfo

      //6.获取参数信息
      this.GoodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //6.监听图片加载完成事件
      this.$bus.$on('detailImgLoad', () => {
        clearTimeout(this.debounceTime)
        this.debounceTime = setTimeout(() => {
          if (this.$refs.scroll && this.$refs.scroll.scroll) {
            this.$refs.scroll.scroll.refresh()
          }
          // console.log('refresh')
          clearTimeout(this.debounceTime)
          this.debounceTime = null
        }, 200)
      })
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    SmallGrayBar,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DatailParamInfo,
  },
}
</script>
<style lang="less" scoped>
#detail {
  // margin-top: 44px;
  position: relative;
  z-index: 100;
  background-color: #fff;
  height: 100vh;

  .detailNavBar {
    position: relative;
    // left: 0;
    // right: 0;
    // top: 0;
    z-index: 10;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
}
</style>
