// call可以调用一个函数，并指定其上下文

const obj = {
  name: "折木",
  team: "穿戴",
  sayTeam() {
    console.log("我所在的团队", this.team);
  },
};
obj.sayTeam();


function func(arg1, arg2) {
  console.log("我的上下文呢？", this.name);
  console.log("参数一", arg1, '参数2', arg2);
}

// func();

// func.call(obj);


// 那么， 看看call干了什么， 函数原型上面的this 指的是函数本身，
// 首先，我们要执行函数，也就是this， 可以把它当作context的一个属性

Function.prototype.myCall = function (context, ...args) {
    // context 为null 时默认指向window
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.func;

    return result;
  };

const a = func.myCall(obj, '宝宝', '👶');
console.log('通过apply执行的结果', a);


Function.prototype.myApply = function (context, args) {
    // context 为null 时默认指向window
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.func;

    return result;
  };

func.myApply(obj, ['xinxin', '😄']);