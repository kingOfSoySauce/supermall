<template>
  <div class="listItem" @click="showStepper = false">
    <!-- logo 店铺名 -->
    <div class="top">
      <shop-logo class="logo" :src="product.shopLogo" :logoWidth="23"></shop-logo>
      &nbsp;
      <h3>{{ product.shop }}</h3>
    </div>
    <!-- 复选框 | 商品图 | 商品名 -->
    <div class="bottom">
      <van-checkbox class="bottom-left" v-model="product.checked" icon-size="18px">
        <div class="image">
          <img :src="product.image" alt="" />
        </div>
      </van-checkbox>
      <div class="bottom-right">
        <p class="title">{{ product.title }}</p>
        <div class="foot">
          <span class="price"
            >￥<span class="number">{{ product.price }}</span></span
          >
          <!-- 步进器 -->
          <span @click.stop>
            <van-stepper v-if="showStepper" v-model="product.count" theme="round" button-size="20" input-width="20" />
            <span class="count" @click.stop="countClick" v-else>
              <span>x{{ product.count }}</span>
            </span>
          </span>
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
  data() {
    return {
      shopCheckbox: false,
      goodsCheckbox: false,
      showStepper: false, //显示右下角步进器
    }
  },
  methods: {
    //点击数量
    countClick() {
      this.showStepper = !this.showStepper
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
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    .logo {
      margin-left: 30px;
    }
    h3 {
      margin-left: 5px;
      font-size: 16px;
      color: var(--color-title);
      // font-weight: 500;
    }
  }
  .bottom {
    position: relative;

    .bottom-left {
      // float: left;
      .image {
        width: 30%;
        border-radius: 15%;
        overflow: hidden;
        height: 0;
        padding-bottom: 30%;
        img {
          width: 100%;
        }
      }
    }
    .bottom-right {
      width: 60%;
      position: absolute;
      top: 0;
      left: 40%;
      right: 0;
      bottom: 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        color: var(--color-title);
        font-size: 16px;
        font-weight: 500;
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
        align-items: center;
        .price {
          color: var(--color-high-text);
          font-weight: 700;
          .number {
            font-size: 21px;
          }
        }
        .count {
          display: inline-block;
          padding: 4px;
          color: var(--color-title);
          border: solid 1px var(--color-normol-text);
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
