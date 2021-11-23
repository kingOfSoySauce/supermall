<template>
  <div class="commentInfo" v-if="commentInfo !== null">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <small-gray-bar :height="3"></small-gray-bar>
    <div class="info-user" v-if="commentInfo.user">
      <shop-logo :src="commentInfo.user.avatar" :logoWidth="45"></shop-logo>
      <span>&nbsp;{{ commentInfo.user.uname }}</span>
      <!-- <img :src="commentInfo.user.avatar" alt=""> -->
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>&nbsp;&nbsp;&nbsp;{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-images">
      <img v-for="item in commentInfo.images" :key="item" :src="item" alt="">
    </div>
  </div>
</template>

<script>
import ShopLogo from '../../../components/content/shopLogo/ShopLogo.vue'
import SmallGrayBar from '../../../components/content/smallGrayBar/SmallGrayBar.vue'
export default {
  components: { SmallGrayBar, ShopLogo },
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {
          content:'暂无评论',
        }
      },
    },
  },
  // 过滤器
  filters: {
    //时间戳转换
    showDate: function (value) {
      if (!value) return ''

      value *= 1000
      let myDate = new Date(value)
      const y = myDate.getFullYear()
      const m = myDate.getMonth() + 1
      const d = myDate.getDate()
      return y + '-' + m + '-' + d
    },
  },
}
</script>

<style lang="less" scoped>
.commentInfo {
  padding: 20px;
  .info-header {
    display: flex;
    justify-content: space-between;
    height: 30px;
    .header-more {
      // flex :1;
    }
  }
  .info-user {
    padding: 5px 0 5px 0;
    display: flex;
    align-items: center;
  }
  .info-other {
    padding:10px 0 10px 0;
    color: var(--color-normol-text);
  }
  .info-images{
    display: flex;
    flex-wrap:wrap;
    overflow: hidden;
    justify-content: left;
    width: 100%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    img{
      // height: 100%;


      width: 24%;
      padding-right: 1%;
    }
  }
}
</style>
