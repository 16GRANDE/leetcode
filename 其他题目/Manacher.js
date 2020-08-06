/*
 * @Author: your name
 * @Date: 2020-08-06 21:42:43
 * @LastEditTime: 2020-08-06 22:03:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\其他题目\Manacher.js
 */
//马拉车算法
function Manacher(s){
  if(s.length<2) return s
  // 第一步：预处理，将原字符串转换为新字符串
  let t = "$"
  for(let str of s){
    t += "#"+str
  }
  // 尾部再加上字符@，变为奇数长度字符串
  t += "#@"
  // 第二步：计算数组p、起始索引、最长回文半径
  let n = t.length
  // p数组
  let p = Array(n).fill(Infinity)
  let id = 0,mx = 0
  // 最长回文子串的长度
  let maxLength = -1
  // 最长回文子串的中心位置索引
  let index = 0
  for(let j=1;j<n-1;j++){
    p[j] = mx > j ? Math.min(p[2*id-j],mx-j) : 1
    // 向左右两边延伸，扩展右边界
    while(t[j+p[j]] == t[j-p[j]]){
      p[j]++
    }
    // 如果回文子串的右边界超过了mx，则需要更新mx和id的值
    if(mx < p[j] + j){
      mx = p[j] + j
      id = j
    }
    // 如果回文子串的长度大于maxLength，则更新maxLength和index的值
    if(maxLength < p[j] - 1){
      maxLength = p[j] - 1
      index = j
    }
  }

  let start = (index-maxLength)/2
  console.log(s.substring(start,start + maxLength))
  return s.substring(start,start + maxLength)
}

Manacher("cabbaf")
// "abba"