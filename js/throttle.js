// 节流的核心在于， 3秒内只执行第一次的，你后面来的


// 用一个中间变量标记一下， 这段时间，da meidamei
function throttle(func, delay) {
  let canRun = true;
  return (...args) => {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      func.apply(this, args);
      canRun = true;
    }, delay);
  };
}
