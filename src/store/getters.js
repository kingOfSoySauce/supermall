export default {
  getTabIndex(state) {
    return state.TabControlCurrentIndex
  },
  getTabName(state) {
    return state.TabName[state.TabControlCurrentIndex]
  },
}
