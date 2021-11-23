<template>
  <div class="goods-list-item" @click="itemClick">
    <!-- <a :href="goodsItem.link"> -->
    <img :src="showImage" alt="" @load="imgLoad" />
    <div class="font">
      <span class="orgPrice">{{ goodsItem.orgPrice }}</span>
      <span class="price">￥{{ goodsItem.price }}</span>

      <h3 class="title">{{ goodsItem.title }}</h3>
      <div class="font-bottom">
        <span class="sale">
          月销量
          <span class="sale-num">
            {{ goodsItem.sale }}
          </span>
        </span>
        <span class="cfav">
          收藏
          <span class="cfav-num">
            {{ goodsItem.cfav }}
          </span>
        </span>
      </div>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default: () => [],
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    },
    shopId() {
      return this.goodsItem.iid || this.goodsItem.item_id
    },
  },
  methods: {
    itemClick() {
      this.$router.push({
        path:'/detail/' + this.shopId,
        query:{
          t:Date.now(),
        }
        })
    },
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
  },
}
</script>

<style lang="less" scoped>
.goods-list-item {
  position: relative;
  width: 47%;
  // float: center;
  background-color: var(--color-background);
  border-radius: 13px;
  overflow: hidden;
  margin-top: 15px;

  box-shadow: 2px 3px 5px rgba(51, 51, 51, 0.1);

  padding-bottom: 17px;

  img {
    width: 100%;
  }

  .font {
    z-index: 0;

    margin: 3px;

    .orgPrice {
      font-size: 10px;
      text-decoration: line-through;
      color: var(--color-normol-text);
    }
    .price {
      font-weight: 900;
      font-size: 15px;
      color: var(--color-high-text);
    }

    .title {
      margin: 5px 0 7px 0;
      font-size: 15px;
      font-weight: 300;
      color: var(--color-title);

      // 多出省略号
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .font-bottom {
      position: relative;
      color: var(--color-normol-text);
      font-size: 11px;
      .sale {
        position: absolute;
        left: 3px;
        .sale-num {
          color: var(--color-sale);
        }
      }
      .cfav {
        position: absolute;
        right: 3px;
        .cfav-num {
          color: var(--color-cfav);
        }
      }
    }
  }
}
</style>
