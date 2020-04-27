/*
 * @Author: your name
 * @Date: 2020-04-27 16:52:23
 * @LastEditTime: 2020-04-27 17:15:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\其他题目\归并排序.js
 */

// 排序一个数组，我们把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起。

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  
  while (right.length) result.push(right.shift());

  return result;
};

const mergeSort = arr => {
  const len=arr.length
  if(len<2) return arr
  let middle = Math.floor(len/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');

//综合时间复杂度 T(n)=O(nlogn) 最佳情况：T(n) = O(nlogn)。 最差情况：T(n) = O(nlogn)。 平均情况：T(n) = O(nlogn)。