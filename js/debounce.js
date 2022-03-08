// 防抖
// 保证最新的调用， 比如我3秒中你输入了一下， 触发了一次事件， 3秒内你又触发了，那宝宝我就继续延迟三秒

// 返回一个新的函数
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
