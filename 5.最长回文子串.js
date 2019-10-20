/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s==null||s=="")
        return "";
    const n=s.length;
    let res="";
    let dp = new Array(n).fill(0).map(function(a){
        return new Array(n).fill(0);
    });
    for(let i=0;i<s.length;i++){
        for(let j=i;j>=0;j--){
            if(s.charAt(i)==s.charAt(j)&&(i-j<2||dp[i-1][j+1]))
                dp[i][j]=true;
            if(dp[i][j]&&(i-j+1)>res.length)
                res=s.substring(j,i+1);
        }
    }
    return res;
};
// @lc code=end

