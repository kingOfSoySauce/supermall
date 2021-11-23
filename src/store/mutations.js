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
  addCart(state, payload) {
    const res= state.cartList.some((item, index) => {
      if (item.iid == payload.iid) {
        state.cartList[index].count++
        return true
      }
    })
    
    if (!res) {
      console.log(res)
        state.cartList.push(payload)
      
    }
  },
}
