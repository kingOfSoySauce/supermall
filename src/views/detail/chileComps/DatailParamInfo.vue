<template>
  <div class="datailParamInfo">
    <!-- {{ GoodsParam }} -->
    <img :src="GoodsParam.image" v-if="GoodsParam.image" />

    <!-- 尺码 -->
    <div class="param">
      <table class="size" v-for="(table,tableIndex) in GoodsParam.sizes" :key="tableIndex" rules="rows">
        <tr v-for="(tr,trIndex) in table" :key="trIndex" class="tr">
          <td v-for="(td, tdIndex) in tr" :key="tdIndex" :class="'td' + tdIndex">{{ td }}</td>
        </tr>
      </table>
      <!-- 详细信息 -->
      <table class="infos" rules="rows">
        <tr v-for="item in GoodsParam.infos" :key="item.key">
          <td class="td0">{{ item.key }}</td>
          <td class="td1">{{ item.value }}</td>
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
  background-color: var(--color-background);
  .param {
    //两个表格共同点
    padding: 15px;
    table {
      width: 100%;
      tr {
        td {
          line-height: 45px;
          height: 45px;
          border: none;
          border-bottom: solid 1px #e2e2e2;
        }
      }
    }
      //尺码表
      .size {
        margin-top: 30px;
        border-bottom: solid 4px #e2e2e2;
        .td0 {
          width: 100px;
        }
        .td3 {
          // width: 80px;
        }
      }

      //详情表
      .infos {
        tr{
          .td0 {
            width: 100px;
          }
          .td1{
            color: var(--color-high-text);
            line-height: 16px;
          }
        }
      }
    
  }
}
</style>
