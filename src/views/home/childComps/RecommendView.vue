<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm" class="box">
      <a :href="item.link">
        <img :src="item.image" />
        <h3>{{ item.title }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  created() {
    // console.log(this.recommends)
  },
}
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.box {
  flex: 1;
  text-align: center;

  padding:10px 0 15px 0 ;

  border-bottom: 8px solid #eee;
  img {
    width: 90%;
    border-radius: 50%;
    box-shadow: 2px 3px 3px rgba(51, 51, 51, 0.438);
  }
  h3 {
    font-weight: 300;
    font-size: 17px;
    text-shadow: 1px 2px 3px rgba(51, 51, 51, 0.562);;
  }
}
</style>
