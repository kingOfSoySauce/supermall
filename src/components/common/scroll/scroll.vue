<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
export default {
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll.refresh()
    },
    finishPullup(){
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })

    //2.监听滚动位置
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scroll', position)
    })

    //3.下拉加载更多
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
}
</script>

<style></style>
