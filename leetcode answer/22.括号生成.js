/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  function _generate(left, right, n, str) {
    if (left == n && right == n) {
      result.push(str);
      return;
    }

    if (left < n) {
      _generate(left + 1, right, n, str + "(");
    }

    if (left > right) {
      _generate(left, right + 1, n, str + ")");
    }
  }

  _generate(0, 0, n, "");
  return result;
};
// @lc code=end
