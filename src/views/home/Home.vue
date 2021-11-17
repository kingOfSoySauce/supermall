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
    <goods-list :goods="goods['pop'].list" ></goods-list>
    <ul>
      <li>li1</li>
      <li>li2</li>
      <li>li3</li>
      <li>li4</li>
      <li>li5</li>
      <li>li6</li>
      <li>li7</li>
      <li>li8</li>
      <li>li9</li>
      <li>li10</li>
      <li>li11</li>
      <li>li12</li>
      <li>li13</li>
      <li>li14</li>
      <li>li15</li>
      <li>li16</li>
      <li>li17</li>
      <li>li18</li>
      <li>li19</li>
      <li>li20</li>
      <li>li21</li>
      <li>li22</li>
      <li>li23</li>
      <li>li24</li>
      <li>li25</li>
      <li>li26</li>
      <li>li27</li>
      <li>li28</li>
      <li>li29</li>
      <li>li30</li>
      <li>li31</li>
      <li>li32</li>
      <li>li33</li>
      <li>li34</li>
      <li>li35</li>
      <li>li36</li>
      <li>li37</li>
      <li>li38</li>
      <li>li39</li>
      <li>li40</li>
      <li>li41</li>
      <li>li42</li>
      <li>li43</li>
      <li>li44</li>
      <li>li45</li>
      <li>li46</li>
      <li>li47</li>
      <li>li48</li>
      <li>li49</li>
      <li>li50</li>
      <li>li51</li>
      <li>li52</li>
      <li>li53</li>
      <li>li54</li>
      <li>li55</li>
      <li>li56</li>
      <li>li57</li>
      <li>li58</li>
      <li>li59</li>
      <li>li60</li>
      <li>li61</li>
      <li>li62</li>
      <li>li63</li>
      <li>li64</li>
      <li>li65</li>
      <li>li66</li>
      <li>li67</li>
      <li>li68</li>
      <li>li69</li>
      <li>li70</li>
      <li>li71</li>
      <li>li72</li>
      <li>li73</li>
      <li>li74</li>
      <li>li75</li>
      <li>li76</li>
      <li>li77</li>
      <li>li78</li>
      <li>li79</li>
      <li>li80</li>
      <li>li81</li>
      <li>li82</li>
      <li>li83</li>
      <li>li84</li>
      <li>li85</li>
      <li>li86</li>
      <li>li87</li>
      <li>li88</li>
      <li>li89</li>
      <li>li90</li>
      <li>li91</li>
      <li>li92</li>
      <li>li93</li>
      <li>li94</li>
      <li>li95</li>
      <li>li96</li>
      <li>li97</li>
      <li>li98</li>
      <li>li99</li>
    </ul>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home'

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
  async created() {
    //请求多个数据
    this.getHomeMultidata()

    //请求商品数据
    this.getHomeGoots('pop')
    this.getHomeGoots('new')
    this.getHomeGoots('sell')
  },
  deactivated() {
    console.log('home休眠')
  },
  activated() {
    console.log('home 激活')
  },
  destroyed() {
    console.log('home销毁')
  },
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
  position: sticky;
  background-color: rgb(248, 242, 242);
  top: 43px;
}
</style>
