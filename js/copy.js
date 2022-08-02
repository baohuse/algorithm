let obj = {
  name: "小明",
  age: 18,
  arr: [1, 2, 3],
  obj2: {
    a: 1,
  },
  fn: function () {
    console.log(123213);
  },
  date: new Date(),
};

// 深拷贝， 拷贝, 就是把传进来的对象复制一份出去， 是一个新的对象，防止直接操作那个对象
// 最简单的，就{...obj}

// 浅，只一层

console.log(obj);
console.log({ ...obj });

function simpleClone(targerObj) {
  let obj = {};
  for (const key in targerObj) {
    if (Object.hasOwnProperty.call(targerObj, key)) {
      obj[key] = targerObj[key];
      // 这种如果是对象等复杂类型， 赋值只是指针变了
    }
  }
  return obj;
}

function deepClone(source, map = new Map()) {
  // 判断克隆目标是数组还是对象
  const targetObj = source.constructor === Array ? [] : {};

  // 如果有对象直接返回对象;如果没有将对象作为key,克隆对象作为value
  if (map.get(source)) return source;
  map.set(source, targetObj);

  // 遍历目标
  for (let keys in source) {
    // 判断类型是否Date,如果是把Date类型JSON转换
    if (source[keys] instanceof Date)
      source[keys] = JSON.parse(JSON.stringify(source[keys]));

    // hasOwnProperty判断是否含有key值(容错处理),返回true:false
    if (source.hasOwnProperty(keys)) {
      // 如果是数组或对象
      if (source[keys] && typeof source[keys] === "object") {
        // 判断赋值空数组或空对象
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        // 递归克隆赋值
        targetObj[keys] = deepClone(source[keys], map);
      } else {
        // 基本数据类型
        targetObj[keys] = source[keys]; // 克隆赋值
      }
    }
  }

  return targetObj;
}

console.log(simpleClone(obj) === obj);
