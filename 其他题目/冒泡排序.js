/*
 * @Author: your name
 * @Date: 2020-04-28 09:56:42
 * @LastEditTime: 2020-04-28 10:08:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\其他题目\冒泡排序.js
 */

function randomNum() {
  return Math.floor(Math.random() * 100);
}
function randomArray() {
  return Array.from(Array(randomNum()), (_) => randomNum());
}

function BubbleSort(n) {
  let i = n.length - 1;
  while (i) {
    for (let j = 0; j <= i; ++j) {
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]];
      }
    }
    i--;
  }
  return n;
}

console.time('耗时');
const array = randomArray();
console.log(BubbleSort(array));
console.timeEnd('耗时');
