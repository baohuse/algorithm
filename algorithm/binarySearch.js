// 二分查找的核心是有序数组，通过一次查找折半的形式找元素/
// 如果比中间值小，则对前半部分进行类似操作；如果比中间值大, 则对后半部分进行类似操作；
// 每次去掉一半，
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middleIndex = Math.floor((left + right) / 2);
    const middle = arr[middleIndex];

    if (middle > target) {
      right = middleIndex;
    } else if (middle < target) {
      left = middleIndex;
    } else {
      return middleIndex;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

const a = binarySearch(nums, target);
console.log(a);
