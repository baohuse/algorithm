// 两数之和
// https://github.com/sisterAn/JavaScript-Algorithms/issues/4
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(i)];
    }
    map.set(nums[i], i);
  }
  return []
};
