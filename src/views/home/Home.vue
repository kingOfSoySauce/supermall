<template>
  <div class="home-container">
    <!-- 顶部标题 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>


    <!-- 轮播图 -->
    <swipe :banners="banners"></swipe>

    <!-- 推荐 -->
    <recommend-view :recommends="recommends"></recommend-view>

    <!-- 推荐列表 -->
    <feature-view></feature-view>

    <!-- 分类bar -->
    <tab-control :title="['流行', '新款', '精选']" class="tab-control"></tab-control>

    <!-- 商品列表 -->
    <goods-list :goods="goods[getTabName].list"></goods-list>


  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home'
import { mapGetters } from 'vuex'
import BScroll from 'better-scroll'

import NavBar from '../../components/common/navbar/NavBar'
import Swipe from '../../components/common/swipe/Swipe'
import TabControl from '../../components/content/tabControl/TabControl.vue'

import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      dKeywords: [],
      keywords: [],

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    }
  },
   computed: {
    ...mapGetters(['getTabName'])
  },
  async created() {
    //请求多个数据
    this.getHomeMultidata()

    //请求商品数据
    this.getHomeGoots('pop')
    this.getHomeGoots('new')
    this.getHomeGoots('sell')
  },
  // deactivated() {
  //   console.log('home休眠')
  // },
  // activated() {
  //   console.log('home 激活')
  // },
  // destroyed() {
  //   console.log('home销毁')
  // },
  methods: {
    //轮播图等数据
    async getHomeMultidata() {
      //1.请求多个数据
      const { data: res } = await getHomeMultidata()

      //2.赋值到本地
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      this.dKeywords = res.data.dKeyword.list
      this.keywords = res.data.keywords.list
    },

    //请求商品数据
    async getHomeGoots(type) {
      const page = this.goods[type].page

      //1.请求数据
      const { data: res } = await getHomeGoods(type, page + 1)

      //2.赋值到本地
      // console.log(res.data.list)
      this.goods[type].list = [...this.goods[type].list, ...res.data.list]
      this.goods[type].page++
    },
  },
  components: { NavBar, Swipe, RecommendView, FeatureView, TabControl, GoodsList },
}
</script>

<style lang="less" scoped>
.home-container {
  // background-color: pink;
  padding-top: 43px;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  background-color: var(--color-tint);
  color: #fff;
}

// 吸顶效果
.tab-control {
  z-index: 9;
  position: sticky;
  background-color: rgb(248, 242, 242);
  top: 43px;
}
</style>
