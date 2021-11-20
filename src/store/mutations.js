export default {
  setTabIndex(state, index = 0) {
    state.TabControlCurrentIndex = index
  },
  enterThreshold(state) {
    state.Threshold = 'enterThreshold'
  },
  leaveThreshold(state) {
    state.Threshold = 'leaveThreshold'
  },
}
