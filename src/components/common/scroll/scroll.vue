<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'

BScroll.use(PullDown)
BScroll.use(Pullup)
BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)

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
    pullDownRefresh: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x = 0, y = 0, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullup() {
      this.scroll && this.scroll.finishPullUp()
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown()
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      observeDOM: true,
      observeImage: true,
      pullDownRefresh: this.pullDownRefresh,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })

    //2.监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    //3.上拉加载更多事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })

    //4.下拉刷新事件
    this.scroll.on('pullingDown', () => {
      this.$emit('pullingDown')
    })

    //下拉刷新提示文字
    this.scroll.on('enterThreshold', () => {
      this.enterThreshold()
    })
    //下拉松手提示文字
    this.scroll.on('leaveThreshold', () => {
      this.leaveThreshold()
    })
  },
  methods: {
    ...mapMutations(['enterThreshold', 'leaveThreshold']),
  },
}
</script>

<style></style>
