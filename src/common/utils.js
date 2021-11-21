export function debounce (fn, delay) {
  let timerId = null;
  return function () {
        let self = this;
        let args = arguments;
        timerId && clearTimeout(timerId);
        timerId = setTimeout(function () {
            fn.apply(self, args);
        }, delay || 1000);
    }
}
// export function debounce(func, delay = 1000) {
//   let timer = null
//   return function () {
//     let self = this
//     let args = arguments
//     timer && clearTimeout(timer)
//     timer = setTimeout(function(){
//       func.apply(self, args)
//     }, delay)
//   }
// }

export function throttle(func, wait) {
  let timer = null
  return function (...args) {
    if (timer === null) {
      // console.log(123123);
      timer = setTimeout(() => {
        func.apply(this, args)
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}
