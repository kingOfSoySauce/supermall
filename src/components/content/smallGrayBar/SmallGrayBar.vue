<template>
  <div class="smallGrayBar" :style="'height: '+height+'px;'"></div>
</template>

<script>
export default {
  props:{
    height:{
      type:Number,
      default:7,
    }
  }
}
</script>

<style>
.smallGrayBar {
  width: 100%;
  background-color: #f3f3f3;
}
</style>
