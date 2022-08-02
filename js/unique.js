// 过滤
function unique(arr) {
  const map = new Map();

  return arr.filter((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
      return true;
    } else {
        return false
    }
  });
}

const a = [1, 2, 3, 4, 3];

const aaa = unique(a);

console.log('aaa是什么', aaa);
