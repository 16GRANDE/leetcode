/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  return dfs(s, 0);
};

let dfs = (s, n) => {
  let res = "";
  let i = n;
  let multi = 0;
  while (i < s.length) {
    let cur = s[i];
    if (cur >= "0" && cur <= "9") {
      multi = multi * 10 + (cur - "0");
    } else if (cur === "[") {
      let tmp = dfs(s, i + 1);
      i = tmp[0];
      let repeatStr = tmp[1];
      for (let j = 0; j < multi; j++) {
        res += repeatStr;
      }
      multi = 0;
    } else if (cur === "]") {
      return [i, res];
    } else {
      res += cur;
    }
    i++;
  }
  return res;
};
// @lc code=end
