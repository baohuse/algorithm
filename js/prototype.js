// 超级简单的原型
// 原型是每个构造函数都有的属性， 我们在原型上写的方法，属性，会在new关键字的作用下
// 赋值给对应的类的实例的 __proto__上去，
// js对象都有__proto__属性， 比如我们的组件实例上面的setstate, 组件自身并没有这个方法， （实例）他没找到就会继续往上找， 他的原型上面有render，
// 原型的原型 __proto__.__proto__ 上面有setstate方法

// function Person() {
//   this.name = "折木";
// }

// Person.prototype.sayHi = function () {
//   console.log("我的名字叫", this.name);
// };

// const p = new Person();

// console.log(p.__proto__); // say hi
// console.log(p.__proto__ === Person.prototype);

// 继承

function Father() {
  this.company = "谢氏药材";
}
Father.prototype.say = function () {
  console.log("我真帅", this.company);
};

//  继承我爸的属性是吧，帅气啦，双眼皮啦

function Me() {
  // 继承属性
  Father.call(this);
}
//  原型上面的东西继承了
Me.prototype = Object.create(Father.prototype);
Me.prototype.constructor = Me;
const m = new Me();
console.log(m.company, m);
m.say();
