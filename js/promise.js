// 怎样实现一个promise

// 1 回顾用法
// 2 思想

// promise的参数为一个函数，这个函数有两个参数 resolve, reject， 当异步成功的时候， 执行resolve，将结果传递出去，
// 异步失败，执行，reject， 传递错误信息

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: { name: "折木" } });
  }, 200);
});

p.then((res) => {
  // 类似做了一层处理？ json化
  const data = res.data;
  console.log(res);
  return data;
}).then((res) => {
  console.log(res);
});

// 思想， 以及规范。 首先他有三个状态

// 等待爱人的到来， 等待中 pending ， 来了， fulfilled 成功。 爱人跟别人跑了， rejected
// 状态初始值就是等待
// pending -》fulfilled
// pending -》rejected

// 定义三种状态
// 核心是一种消息通知的机制
const PENDING = "PENDING"; // 进行中
const FULFILLED = "FULFILLED"; // 已成功
const REJECTED = "REJECTED"; // 已失败

class P {
  constructor(exector) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    // 用于保存 then 的成功回调数组
    this.resolvedQueues = [];
    // 用于保存 then 的失败回调数组
    this.rejectedQueues = [];

    try {
      exector(this._resolve, this._reject);
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve = (value) => {
    if (this.status !== PENDING) return;
    this.value = value;
    this.status = FULFILLED;
    this.resolvedQueues.forEach((callback) => callback(value));
  };

  _reject = (reason) => {
    if (this.status !== PENDING) return;
    this.reason = reason;
    this.status = REJECTED;
    this.rejectedQueues.forEach((callback) => callback(reason));
  };

  // 当成功或者失败后，会做对应的动作
  then = (onResolved, onRejected) => {
    //  入参正确性判断
    if (this.status === PENDING) {
      this.resolvedQueues.push(onResolved);
      this.rejectedQueues.push(onRejected);
    }

    // 状态如果变了， 就直接调用返回结果
    if (this.status === FULFILLED) onRejected(this.value);
    if (this.status === REJECTED) onRejected(this.reason);
  };
}

const ppp = new P((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random(10);
    console.log(num);
    if (num < 0.5) resolve("成功");
    else reject("失败");
  }, 300);
});

ppp.then(
  (res) => {
    console.log("成功回调", res);
  },
  (err) => {
    console.log("失败的回调", err);
  }
);
