/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
let fibList = []
  backtrack(S, fibList, [], 0)
  return fibList
};

function backtrack (str, fibList, templist, st) {
  if (fibList.length > 0) return
  if (st == str.length && templist.length >= 3) {
    fibList.push(...templist)
    return
  }
  let size = templist.length
  let lng = str.length
  
  for (let i = st; i < str.length; i++) {
    if (str[st] == 0 && i > st) break

    let num = str.slice(st, i + 1)
    if (num > 0x7fffffff) break
    
    let maxlength = Math.ceil(lng / 3)
    if (num.length > maxlength) break
    
    if (size >= 2 && num > templist[size - 1] + templist[size - 2]) break

    if (size < 2 || num == templist[size - 1] + templist[size - 2]) {
      let newlist = [...templist,Number(num)]
    
      backtrack(str, fibList, newlist, i + 1)
    }
  }
};
// @lc code=end

