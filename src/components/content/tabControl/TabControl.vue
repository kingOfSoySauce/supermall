<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="item" class="tab-control-item" :class="index === getTabIndex ? 'active' : ''" @click="change(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    ...mapGetters(['getTabIndex']),
  },
  methods: {
    change(index) {
      this.setTabIndex(index)
    },
    ...mapMutations(['setTabIndex']),
  },
}
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  // justify-content: space-around;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}

.tab-control-item {
  flex: 1;
  span {
    padding: 5px;
  }
}
.active {
  color: var(--color-high-text);
  span {
    border-bottom: solid 3px var(--color-high-text);
  }
}
</style>
