<template>
  <div class="detailShopInfo" v-if="shop !== null">
    <!-- 头像 店名 -->
    <div class="title"><shop-logo :src="shop.logo"></shop-logo>&nbsp;{{ shop.name }}</div>

    <!-- 销量 全部宝贝  |  评分 -->
    <div class="content">
      <!-- 销量 全部宝贝 -->
      <div class="left">
        <div class="selas"><span class="number">{{ shop.sells }}</span> <br />总销量</div>
        <div class="allGoods"><span class="number">{{ shop.goodsCount }}</span> <br />全部宝贝</div>
      </div>
      <!-- 描述 价格 质量 -->
      <div class="right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index" class="item">
            <th class="itemName">{{ item.name }}</th>
            <th class="score" :class="item.isBetter ? 'green' : 'red'">{{ item.score }}</th>
            <th v-if="item.isBetter"><span class="isBetter height">高</span></th>
            <th v-else><span class="isBetter low">低</span></th>
          </tr>
        </table>
      </div>
    </div>

    <div class="enter">
      <div class="enterBtn">进店逛逛</div>
    </div>


  </div>
</template>

<script>
import ShopLogo from 'components/content/shopLogo/ShopLogo.vue'
export default {
  components: { ShopLogo },
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="less" scoped>
.detailShopInfo {
  padding: 20px;
  background-color: var(--color-background);
  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 20px;
    color: var(--color-title);
  }
  .content {
    display: flex;
    .left {
      flex: 1;
      align-items: center;
      text-align: center;
      display: flex;
      justify-content: center;

      display: flex;
      justify-content: space-evenly;

      line-height: 25px;
      border-right: solid 1px rgb(192, 192, 192);

      .number{
        color: var(--color-title);
        font-size: 20px;
      }
    }
    .right {
      flex: 1;
      text-align: left;
      line-height: 25px;

      table {
        margin: 0 auto;
        th {
          font-weight: 500;
          padding: 5px;
        }
      }

      .green {
        color: #f58482;
      }
      .red {
        color: #89ad72;
      }
      .isBetter {
        color: white;
        text-align: center;
        border: 1px solid;
      }
      .height {
        background-color: #f58482;
        border-color: #f58482;
      }
      .low {
        border-color: #89ad72;
        background-color: #89ad72;
      }
    }
  }
  .enter {
    margin: 15px 0 0 0;
    display: flex;
    justify-content: center;
    .enterBtn {
      display: inline-block;

      padding: 10px 40px 10px 40px;
      font-size: 20px;
      text-align: center;

      background-color: #f3f5f9;
      border-radius: 10px;
    }
  }
}
</style>
