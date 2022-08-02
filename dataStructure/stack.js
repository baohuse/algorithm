// 设计一个包含进栈， 出栈， 获取栈顶元素， 获取最小元素的栈

class Stack {
  constructor() {
    this.items = [];
    this.min = null;
  }

  // 进栈
  push(item) {
    this.items.push(item);
    this.min = Math.min(item, ...this.items);
  }

  // 出栈
  pop() {
    this.items.pop();
    this.min = Math.min(...this.items);
  }

  // 栈顶元素
  top() {
    // null 表示空值，
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    this.items.length === 0;
  }

  // 栈的大小
  size() {
    return this.items.length;
  }

  //
  clear() {
    this.items = [];
  }


  getMin() {
    return this.min;
  }
}

const s = new Stack();

s.push("进栈 ==》 1");
s.push("进栈 ==》 2");
console.log(s.items);
s.pop();
console.log(s.items);

// 栈主要用在js 函数调用栈，

// ([])
// 有效的括号
const isVerify = (str) => {

  // 不是2的整数倍， 直接false, 例如 ()/
  const mapK = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const mapK2 = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const rightK = Object.values(mapK);
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    console.log(item, stack);
    if (item === "{" || item === "[" || item === "(") {
      stack.push(item);
    } else if(rightK.includes(item)) {
      if (mapK2[item] === stack[stack.length - 1]) {
        // 推出
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log("有效的括号", isVerify("([])"));
