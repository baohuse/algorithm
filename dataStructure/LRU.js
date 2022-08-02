class LRUCache {
  constructor(capacity) {
    this.keys = [];
    this.capacity = capacity;
    this.cache = Object.create(null);
  }

  // 最近优先，每次访问重新
  get(key) {
    if (this.cache[key]) {
      // 调整位置
      remove(this.keys, key);
      this.keys.push(key);
      return this.cache[key];
    }
    return -1;
  }

  // 设置，类似于新开页面
  put(key, value) {
    if (!this.cache[key]) {
      this.keys.push(key);
      this.cache[key] = value;

      // 最大值判断
      if (this.keys.length > this.capacity) {
        removeCache(this.cache, this.keys, this.keys[0]);
      }
    } else {
      remove(keys, key);
      this.keys.push(key);
      this.cache[key] = value;
    }
  }
}

function remove(arr, key) {
  if (arr.length) {
    const index = arr.indexOf(key);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
// 移除缓存中 key
function removeCache(cache, keys, key) {
  cache[key] = null;
  remove(keys, key);
}

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
console.log(cache.get(2));
// console.log(cache.keys);

// 使用数组结构， 每次访问， 或者每次put都更新下最新的这个key，

// 利用 Map 既能保存键值对，并且能够记住键的原始插入顺序

const LRUCache2 = (max) => {
  this.cache = new Map();
  this.max = max;
};

LRUCache2.prototype.get = function (key) {

  if(this.cache.has(key)) {
    // 
    return this.cache.get(key)
  }

  return -1;
};
