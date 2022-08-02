// 数组扁平化 ， 去重， 并坐排序

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flat(arr, deep = 4) {
  const newArr =
    deep > 0
      ? arr.reduce((prev, cur) => {
          if (Array.isArray(cur)) {
            return [...prev, ...flat(cur, deep - 1)];
          }
          return [...prev, cur];
        }, [])
      : arr;

  return newArr;
}

function unique(arr) {
  return [...new Set(arr)];
}

function unique2(arr) {
  const map = new Map();
  return arr.filter((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
      return true;
    }
    return false;
  });
}

function sort(arr) {
  return arr.sort((a, b) => a - b);
}

function compose(fn, ...rest) {
    return rest.reduce((pre, cur) => x => pre(cur(x)), fn);
  }

const a = compose(sort, unique2, flat)

const newArray = flat(arr, 4);
console.log("新数组", newArray, sort(unique2(newArray)), a(arr));
