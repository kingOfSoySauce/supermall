<template>
  <div class="cart-container">
    <!-- 顶部导航 -->
    <nav-bar class="topBar"
      ><template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>

    <scroll class="content" ref="scroll" @scroll="pageScroll" :probeType="3">
      <!-- 购物车列表 -->
      <cart-list></cart-list>
      <!-- <ul>
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
      </ul> -->
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import { mapGetters } from 'vuex'
import CartList from './childComps/CartList.vue'
import Scroll from '../../components/common/scroll/scroll.vue'
export default {
  components: { NavBar, CartList, Scroll },
  name: 'Cart',
  computed: {
    ...mapGetters(['cartLength']),
  },
  methods: {
    //页面滑动
    pageScroll() {},
  },
}
</script>

<style lang="less" scoped>
.cart-container {
  position: relative;
  height: 100vh;
  overflow: hidden;

  background-color: var(--color-background);

  .topBar {
    background-color: #ff8e96;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
  .content {
    height: calc(100% - 44px - 50px);
    overflow: hidden;
  }
}
</style>
