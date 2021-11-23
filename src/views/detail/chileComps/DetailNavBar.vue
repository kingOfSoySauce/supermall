<template>
  <div class="box">
    <nav-bar>
      <!-- 左边返回键-->
      <template v-slot:left>
        <div class="btnBack" @click="clickBack">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>

      <!-- 中间四个选项 -->
      <template v-slot:center>
        <div class="titles">
          <div v-for="(item, index) in titles" @click="clickTitle(index)" :key="item" class="titleItem" :class="index === active ? 'currentTitle' : ''">
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '尺码', '实拍', '相关'],
      currentTitle: 0,
    }
  },
  props:{
    active:{
      type:Number,
      default:0
    }
  },

  methods: {
    clickTitle(index) {
      this.currentTitle = index

      this.$emit('titleClick',index)
    },
    clickBack(){
      this.$router.back()
    }
  },
  components: { NavBar },
}
</script>

<style scoped lang="less">
//左侧返回键
.btnBack{
  img{
    margin-top: 15px;
  }
}

// 中间四个标题
.titles {
  display: flex;
  justify-content: space-evenly;
  .titleItem {
    flex: 1;
  }
  .currentTitle {
    color: var(--color-high-text);
  }
}
</style>
