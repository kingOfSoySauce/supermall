<template>
  <div class="box" v-if="goods && goods.columns && goods.services">
    <!-- 标题 -->
    <h3 class="title">{{ goods.title }}</h3>

    <!-- 价格 -->
    <div class="price">
      <span class="newPrice">{{ goods.realprice }}</span>
      <span class="oldPrice" v-if="goods.oldPrice">&nbsp;{{ goods.oldPrice }}&nbsp;</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>

    <!-- 销量 收藏 退货补运费 -->
    <div class="volume">
      <span class="sales">{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>

    <!-- 七天无理由 72小时发货 -->
    <div class="logistics">
      <span>
        <img :src="goods.services[0].icon" alt="" />
        {{ goods.services[0].name }}
      </span>
      <span>
        <img :src="goods.services[1].icon" alt="" />
        {{ goods.services[1].name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="less" scoped>
.box {
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  .title {
    color: var(--color-title);
    font-weight: 500;
    font-size: 19px;
  }
  //价格
  .price {
    .newPrice {
      font-size: 25px;
      color: var(--color-tint);
    }
    .oldPrice {
      text-decoration-line: line-through;
      font-size: var(--font-size);
      color: var(--color-normol-text);
    }
    .discount {
      border-radius: 10px;

      padding: 5px;
      font-size: 17px;

      background-color: var(--color-high-text);
      color: var(--color-background);
    }
  }
  // 销量 收藏 退货补运费
  .volume {
    display: flex;
    justify-content: space-between;
    color: var(--color-normol-text);
  }
  // 七天无理由 72小时发货
  .logistics {
    display: flex;
    justify-content: space-between;
    img {
      width: var(--font-size);
    }
  }
}
</style>
