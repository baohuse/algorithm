// 我记得我刚开始学习react的时候，很疑惑，为啥老是在onClick事情的函数处理绑定上面提前bindthis
// 首先要明白一件事情， 组件的this， 指向的是它的实例
// 那我们先写个简单的函数来看一下为啥需要显示的绑定this

function createElement(onClick) {
  onClick();
}

class MyComponent {
  constructor() {
    this.name = "折木";
    this.say = this.say.bind(this);
  }

  say() {
    console.log("我的花名叫", this.name);
  }

  render() {
    // 将this.say 传给createElement这个函数
    createElement(this.say);
  }
}

let cc = new MyComponent();

//cc.say();
cc.render();

// react 里面say被传给了jsx, 相当于是createElement

// bind, 很显然返回一个新的函数，
Function.prototype.bind = function (context, ...args) {
  const func = this;
  return function (...args2) {
    func.apply(context, [...args, ...args2]);
  };
};
