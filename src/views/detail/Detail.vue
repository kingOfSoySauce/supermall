<template>
  <div id="detail" class="detail">
    <DetailNavBar class="detailNavBar" @titleClick="titleClick" :active="barActive"></DetailNavBar>
    <scroll class="content" ref="scroll" :pullUpLoad="false" :pullDownRefresh="false" @scroll="pageScroll" :probeType="3">
      <detail-swiper :topImages="topImages" ref="swiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <small-gray-bar />
      <detail-shop-info :shop="shop"></detail-shop-info>
      <small-gray-bar />
      <datail-param-info :GoodsParam="GoodsParam" ref="goodsParam"></datail-param-info>
      <small-gray-bar />
      <detail-goods-info :detailInfo="detailInfo" ref="goodsInfo"></detail-goods-info>
      <small-gray-bar />
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
      <small-gray-bar />
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-if="showBackTop"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import { getDetailData, getRecommend, Goods, Shop, GoodsParam } from 'network/detail'

import SmallGrayBar from 'components/content/smallGrayBar/SmallGrayBar.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import DetailNavBar from './chileComps/DetailNavBar.vue'
import DetailSwiper from './chileComps/DetailSwiper.vue'
import DetailBaseInfo from './chileComps/DetailBaseInfo.vue'
import DetailShopInfo from './chileComps/DetailShopInfo.vue'
import DetailGoodsInfo from './chileComps/DetailGoodsInfo.vue'
import DatailParamInfo from './chileComps/DatailParamInfo.vue'
import DetailCommentInfo from './chileComps/DetailCommentInfo.vue'
import DetailBottomBar from './chileComps/DetailBottomBar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
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
      commentInfo: {},
      recommends: [],
      throttleTimer: null,
      barActive: 0,
      showBackTop: false,

      //记录各个组件的位置
      swiperY: 0,
      goodsParamY: 0,
      goodsInfoY: 0,
      commentInfoY: 0,
      recommendsY: 0,
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.id

    //2.请求数据
    this.getDetailData()

    //3.请求推荐数据
    this.getRecommend()

    //.监听图片加载完成事件
    this.$bus.$on('detailImgLoad', () => {
      clearTimeout(this.debounceTime)
      this.debounceTime = setTimeout(() => {
        if (this.$refs.scroll && this.$refs.scroll.scroll) {
          this.$refs.scroll.scroll.refresh()
        }
        clearTimeout(this.debounceTime)
        this.debounceTime = null
      }, 200)
    })
  },
  mounted() {},
  updated() {
    // console.log(this.$refs.goodsParam.$el.offsetTop)
    this.goodsParamY = this.$refs.goodsParam.$el.offsetTop
    this.goodsInfoY = this.$refs.goodsInfo.$el.offsetTop
    this.commentInfoY = this.$refs.commentInfo.$el.offsetTop
    this.recommendsY = this.$refs.recommends.$el.offsetTop
  },
  methods: {
    //获取详情页信息
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

      //7.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    },
    //获取推荐信息
    async getRecommend() {
      const { data: res } = await getRecommend()
      // console.log(res.data.list)
      this.recommends = res.data.list
    },

    //捕获详情页导航栏点击事件
    titleClick(index) {
      //改变显示颜色
      this.barActive = index

      //暂时禁用滚动监听300ms
      this.throttleTimer = setTimeout(() => {
        this.throttleTimer = null
      }, 300)

      let y = 0
      switch (index) {
        case 0:
          break
        case 1:
          y = this.goodsParamY
          break
        case 2:
          y = this.goodsInfoY
          break
        case 3:
          y = this.recommendsY
          break
      }
      this.$refs.scroll.scrollTo(0, -y)
    },

    //页面滚动事件
    pageScroll({ y }) {
      if (!this.throttleTimer) {
        this.throttleTimer = setTimeout(() => {
          y = -y
          //判断滚动位置
          if (y < this.goodsParamY) {
            this.barActive = 0
            this.showBackTop = false //不显示返回顶部
          } else if (y < this.goodsInfoY) {
            this.barActive = 1
            this.showBackTop = true //显示显示返回顶部
          } else if (y < this.recommendsY) {
            this.barActive = 2
            this.showBackTop = true //显示显示返回顶部
          } else if (y >= this.recommendsY) {
            this.barActive = 3
            this.showBackTop = true //显示显示返回顶部
          }

          clearTimeout(this.throttleTimer)
          this.throttleTimer = null
        }, 0)
      }
    },

    //点击返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    //添加购物车
    addCart() {
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realprice,
        iid: this.iid,
        shop:this.shop.name,
        shopLogo:this.shop.logo,
        count: 1,
      }
      this.$store.commit('addCart', product)
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
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
}
</script>
<style lang="less" scoped>
#detail {
  position: relative;
  height: 100vh;
  overflow: hidden;

  background-color: var(--color-background);

  .detailNavBar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px - 50px);
    overflow: hidden;
  }
}
</style>
