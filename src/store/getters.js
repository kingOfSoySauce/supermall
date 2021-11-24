export default {
  getTabIndex(state) {
    return state.TabControlCurrentIndex
  },
  getTabName(state) {
    return state.TabName[state.TabControlCurrentIndex]
  },
  getThreshold(state) {
    return state.Threshold
  },
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
}
