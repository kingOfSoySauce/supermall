<template>
  <div class="home-container">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <swipe></swipe>
  </div>
</template>

<script>
import Swipe from '../../components/common/swipe/Swipe'
import NavBar from '../../components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      dKeywords: [],
      keywords: [],
    }
  },
  async created() {
    //1.请求多个数据
    const { data: res } = await getHomeMultidata()
    console.log(res.data)

    //2.赋值到本地
    this.banners = res.data.banner.list
    this.recommends = res.data.recommend.list
    this.dKeywords = res.data.dKeyword.list
    this.keywords = res.data.keywords.list
  },
  components: { NavBar, Swipe },
}
</script>

<style lang="less" scoped>
.home-container {
  // background-color: pink;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
