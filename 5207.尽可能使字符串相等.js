/*
 * @lc app=leetcode.cn id=5207 lang=javascript
 *
 * [5207] 尽可能使字符串相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let tmp=[]
    let ans=0
    for(let i=0;i<s.length;i++){
        tmp.push(Math.abs(s.charCodeAt(i)-t.charCodeAt(i)))
    }
    for(let i=0;i<s.length;i++){
        if(tmp[i]<=maxCost){
            let j=i
            let sum=0
            let count=0
            while(sum<=maxCost&&j<=s.length){
                sum +=tmp[j]
                j++
                count++
            }
            ans=ans<count-1? count-1:ans
        }
    }
    return ans
};
// @lc code=end

