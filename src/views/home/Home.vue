<template>
  <div class="home-container">
    <div class="fixedTop">
      <!-- 顶部标题 -->
      <nav-bar class="home-nav">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>

      <!-- 固定的分类bar -->
      <tab-control :title="['流行', '新款', '精选']" class="tab-control" @click.native="clickTabControl" v-if="isTabShow"></tab-control>
    </div>
    <!-- 返回顶部 -->
    <back-top @click.native="backClick" v-if="showBackTop"></back-top>

    <!-- 滚动better-scroll -->
    <scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad="true" :pullDownRefresh="true" @scroll="contenScroll" @pullingUp="loadMore" @pullingDown="pullDownRefresh">
      <!-- 下拉提示文字 -->
      <PullingDownTip class="PullingDownTip"></PullingDownTip>
      <!-- 轮播图 -->
      <swipe :banners="banners" class="height:195px"></swipe>

      <!-- 推荐 -->
      <recommend-view :recommends="recommends" class="height:140.61px"></recommend-view>

      <!-- 推荐列表 本周流行 -->
      <feature-view class="height:278.06px"></feature-view>

      <small-gray-bar></small-gray-bar>

      <!-- 分类bar -->
      <tab-control :title="['流行', '新款', '精选']" class="tab-control" ref="tabControl" @click.native="clickTabControl"></tab-control>

      <!-- 商品列表 -->
      <goods-list :goods="goods[getTabName].list"></goods-list>
    </scroll>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home'
import { mapGetters } from 'vuex'

import NavBar from 'components/common/navbar/NavBar'
import Swipe from 'components/common/swipe/Swipe'
import TabControl from 'components/content/tabControl/TabControl.vue'

import Scroll from 'components/common/scroll/scroll.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import PullingDownTip from './childComps/PullingDownTip.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop'
import SmallGrayBar from '../../components/content/smallGrayBar/SmallGrayBar.vue'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      dKeywords: [],
      keywords: [],
      showBackTop: false,
      tabOffsetTop: 622,
      isTabShow: false,
      timer: null,
      debounceTime: null,
      itemImgListener: null, //监听图片加载事件
      saveY: 0, //保存页面位置

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    }
  },
  computed: {
    ...mapGetters(['getTabName']),
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()

    //请求商品数据
    this.getHomeGoots('pop')
    this.getHomeGoots('new')
    this.getHomeGoots('sell')
  },
  mounted() {
    //监听图片加载事件
    this.itemImgListener = () => {
      clearTimeout(this.debounceTime)
      this.debounceTime = setTimeout(() => {
        this.$refs.scroll.scroll.refresh()
        clearTimeout(this.debounceTime)
        this.debounceTime = null
      }, 200)
    }
    this.$bus.$on('imgLoad', this.itemImgListener)
  },
  updated() {
    //监听tab距离顶部距离
    this.tabOffsetTop = this.$refs.tabControl && this.$refs.tabControl.$el.offsetTop
  },
  //组件激活时
  activated() {
    //跳转到对应位置
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.scroll.refresh()
  },
  //组件失活时
  deactivated() {
    // console.log('homede');
    //保存当前浏览位置
    const y = this.$refs.scroll.getY()
    this.saveY = y
    // console.log(this.$refs.scroll.getY())

    //取消图片加载事件监听
    this.$bus.$off('imgLoad', this.itemImgListener)
  },
  methods: {
    //返回顶部
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300)
    },

    //内容滚动
    contenScroll(position) {
      //吸顶效果
      if (-position.y > this.tabOffsetTop) {
        this.isTabShow = true
      } else {
        this.isTabShow = false
      }
      //弹出或隐藏backTop
      if (position.y < -1000) {
        this.showBackTop = true
      } else {
        this.showBackTop = false
      }
    },

    //下拉加载更多
    loadMore() {
      this.getHomeGoots(this.getTabName)
      this.$refs.scroll.scroll.refresh()
    },

    //上拉刷新
    pullDownRefresh() {
      this.getHomeGoots(this.getTabName, false)
      this.$refs.scroll.scroll.refresh()
    },

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

    //默认请求商品数据，第二参数为false时，刷新数据
    async getHomeGoots(type, loadMore = true) {
      const page = this.goods[type].page

      //1.请求数据
      const { data: res } = await getHomeGoods(type, page + 1)

      if (loadMore == true) {
        //2.加载更多，插到末尾
        this.goods[type].list = [...this.goods[type].list, ...res.data.list]
        this.$refs.scroll.scroll.finishPullUp()
      } else {
        //3.刷新列表，插到前面
        this.goods[type].list = [...res.data.list, ...this.goods[type].list]
        this.$refs.scroll.scroll.finishPullDown()
      }

      //刷新下拉
      this.$refs.scroll.scroll.refresh()
      this.goods[type].page++
    },

    //点击切换卡片
    clickTabControl() {
      this.$refs.scroll.scroll.refresh()
    },
  },
  components: { PullingDownTip, BackTop, Scroll, NavBar, Swipe, RecommendView, FeatureView, TabControl, GoodsList, SmallGrayBar },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.fixedTop {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  //home头顶的导航栏
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
}
// 吸顶效果
.tab-control {
  background-color: rgb(255, 255, 255);
}

// 滚动的高度
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

//下拉刷新提示文字
.PullingDownTip {
  position: absolute;

  left: 0;
  right: 0;
  top: -40px;
}
</style>
