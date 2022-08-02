// 节流的核心在于， 3秒内只执行第一次的，你后面来的

// 用一个中间变量标记一下， 这段时间，da meidamei
function throttle(func, delay) {
  let canRun = true;
  let first = true;
  return (...args) => {
    if (!canRun) return;
    if (first) {
      func.apply(this, args);
    }
    canRun = false;
    setTimeout(() => {
      if (first) {
        first = false;
      } else {
        func.apply(this, args);
      }
      canRun = true;
    }, delay);
  };
}

// const handleClick = throttle((e) => {
//   console.log("你点我是吧 ？", e);
// }, 2000);

// document.getElementById("input2").onclick = handleClick;
