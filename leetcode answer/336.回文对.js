/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let arr = [];

  for (let i = 0, len = words.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (isPalindrome(words[i] + words[j]) && i !== j) {
        arr.push([i, j]);
      }
    }
  }

  return arr;
};

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      break;
    }
  }

  return start >= end;
}
// @lc code=end
