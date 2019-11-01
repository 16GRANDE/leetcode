/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const m = Math.pow(2, n);
  const t = [];

  for (let i = 0; i < n; ++i) {
    t.push(Math.pow(2, i));
  }

  const c = new Array(m - 1).fill(0);

  const result = [0];
  c[0] = 1;

  for (let i = 1; i < m; ++i) {
    let j = 0;
    while (c[result[i - 1] ^ t[j]]) {
      ++j;
    }
    result.push(result[i - 1] ^ t[j]);
    c[result[i - 1] ^ t[j]] = 1;
  }
  return result;
};
// @lc code=end
