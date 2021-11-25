<template>
  <div class="cartBottomBar">
    <div class="left">
      <div class="allCheck">
        <van-checkbox icon-size="18px" :value="allChecked" @click="clickCheckBox"> 全选 </van-checkbox>
      </div>
    </div>
    <div class="right">
      <div class="total">
        合计:
        <span class="totalNumber">
          ￥<span class="bigNumber">{{ totalPrice }}</span>
        </span>
      </div>
      <div class="settlement">
        <div class="settlementBtn">
          结算<span v-if="totalNumber !== 0">({{ totalNumber }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    // 总金额
    totalPrice() {
      let checkArr = this.cartList.filter((item) => item.checked)
      if (checkArr.length == 0) return 0
      return checkArr.reduce((total, currentValue) => total + (currentValue.price - 0) * currentValue.count, 0).toFixed(2)
    },
    // 是否全选
    allChecked() {
      if (this.cartList.length === 0) return false
      return !this.cartList.some((item) => !item.checked)
    },
    //去结算
    totalNumber() {
      const checkArr = this.cartList.filter((item) => item.checked)
      if (checkArr.length == 0) return 0
      return checkArr.reduce((total, currentValue) => total + currentValue.count, 0)
    },
    ...mapGetters(['cartList']),
  },
  methods: {
    // 点击全选按钮
    clickCheckBox() {
      //如果已经全选
      if (this.allChecked) {
        this.cartList.forEach((element) => {
          element.checked = false
        })
      } else {
        //如果没有全选
        this.cartList.forEach((element) => {
          element.checked = true
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.cartBottomBar {
  height: 40px;
  background-color: #fff;
  position: relative;
  // bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    margin-left: 10px;
  }
  .right {
    display: flex;
    align-items: center;
    .total {
      .totalNumber {
        color: #ff8198;
        .bigNumber {
          margin-left: -3px;
          font-size: 25px;
          font-weight: 700;
        }
      }
    }
    .settlement {
      width: 100px;

      text-align: center;
      color: #ffffff;
      .settlementBtn {
        margin: 0 5px;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        background-image: linear-gradient(to right, #ff9fa5, #ffc49d);
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>
