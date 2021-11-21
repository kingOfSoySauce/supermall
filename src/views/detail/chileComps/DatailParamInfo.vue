<template>
  <div class="datailParamInfo">
    <!-- {{ GoodsParam }} -->
    <img :src="GoodsParam.image" v-if="GoodsParam.image" />

    <!-- 尺码 -->
    <div class="size">
      <!-- {{GoodsParam.sizes}} -->
      <table v-for="table in GoodsParam.sizes" :key="table">
        <tr v-for="tr in table" :key="tr" class="tr">
          <td v-for="td in tr" :key="td">{{ td }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodsParam: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="less" scoped>
.datailParamInfo {
  .size {
    line-height: 30px;
    table {
      width: 100%;
      tr {
        // background-color:#000;
        td{
          border:none;
          border-bottom: solid 1px gray;

        }
      }
    }
  }
}
</style>
