/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let dp = [0], stack = [], max = 0;
    for(let i=1;i<=s.length;++i){
        let top = stack.length-1;
        if(stack[top]&&stack[top].v=="("&&s[i-1]==")"){
           let e=stack.pop();
           dp[i]=dp[e.n-1]+dp[i-1]+2;
           max =Math.max(max,dp[i]);
           }
        else{
            stack.push({n:i,v:s[i-1]});
            dp[i]=0;
        }
    }
    return max;
};
// @lc code=end

