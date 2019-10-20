/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let temp=s;
    let s1=temp.split("").reverse().join("");
    let start=0;
    let end=s.length-1;
    let res="";
    for(let i=1;i<s.length;i++)
    {
       if(s1.substring(start)==s.substring(0,end+1)){
          break;
          }
        else{
            start++;
           end--;
        }
    }
    res=s1.substring(0,start).concat(s);
    return res;
};
// @lc code=end

