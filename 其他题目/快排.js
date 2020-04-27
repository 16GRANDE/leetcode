/*
 * @Author: your name
 * @Date: 2020-04-27 17:15:49
 * @LastEditTime: 2020-04-27 17:26:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\其他题目\快排.js
 */

//先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
//左右分别用一个空数组去存储比较后的数据。
//最后递归执行上述操作，直到数组长度 <= 1;

//第一种
const quickSort1 = (arr) => {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const valArr = arr.splice(midIndex, 1);
  const midIndexVal = valArr[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort1(left).concat(midIndexVal, quickSort1(right));
};
const array2 = [5, 4, 3, 2, 1];
console.log('quickSort1 ', quickSort1(array2));

//第二种
const quickSort = (arr, left, right) => {
  let len = arr.length,
    partitionIndex;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  //分区操作
  let pivot = left, //设定基准值（pivot）
    index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const array = [5, 4, 3, 2, 1];
console.log('原始array:', array);
const newArr = quickSort(array);
console.log('newArr:', newArr);
// 原始 array:  [5, 4, 3, 2, 1]
// newArr:     [1, 4, 3, 2, 5]

//最佳情况：T(n) = O(nlogn)。 最差情况：T(n) = O(n2)。 平均情况：T(n) = O(nlogn)。
