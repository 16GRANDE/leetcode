/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let deep=0,ans=0
    for(let i=0;i<S.length;i++){
        if(S[i]==="(") deep++
        else deep--
        if(S[i]===")"&&S[i-1]==="(") ans+=1<<deep
    }
    return ans
};
// @lc code=end

