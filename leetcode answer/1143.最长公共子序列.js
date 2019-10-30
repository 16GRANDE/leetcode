/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length,
    len2 = text2.length;
  let result = new Array(len1 + 1);
  for (let i = 0; i <= len1; i++) {
    result[i] = new Array(len2 + 1).fill(0);
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        result[i][j] = result[i - 1][j - 1] + 1;
      } else {
        result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
      }
    }
  }
  return result[len1][len2];
};
// @lc code=end
