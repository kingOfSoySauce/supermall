<template>
  <div class="listItem">
    <div class="top">
      <input type="checkbox" />
      <shop-logo class="logo" :src="product.shopLogo" :logoWidth="23"></shop-logo>
      &nbsp;
      <h3>{{ product.shop }}</h3>
    </div>
    <div class="bottom">
      <input type="checkbox" />
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <div class="bottom-right">
        <p class="title">{{ product.title }}</p>
        <div class="foot">
          <span class="price"
            >￥<span class="number">{{ product.price }}</span></span
          >
          <span class="count">x{{ product.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopLogo from 'components/content/shopLogo/ShopLogo.vue'
export default {
  components: { ShopLogo },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="less" scoped>
.listItem {
  border-radius: 10px;
  background-color: #fff;
  margin: 10px 0 10px 0;
  padding: 10px;

  .top {
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    .logo {
      margin-left: 5px;
    }
    h3 {
      margin-left: 5px;
      font-size: 18px;
      color: var(--color-title);
      // font-weight: 500;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input {
      // margin-right: 5px;
    }
    .image {
      // flex:2 ;
      margin: 0 0px 0 10px;
      width: 90px;
      height: 90px;
      border-radius: 10%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .bottom-right {
      // flex: 0;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding-left: 20px;
      .title {
        color: var(--color-title);
        font-size: 16px;
        font-weight: 900;
        width: 200px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .foot {
        display: flex;
        justify-content: space-between;
        .price {
          color: var(--color-high-text);
          font-weight: 700;
          .number {
            font-size: 20px;
          }
        }
        .count {
          display: inline-block;
          padding: 3px;
          color: var(--color-title);
          border: solid 1px var(--color-normol-text);
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
