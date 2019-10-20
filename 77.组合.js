/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans=[],res=[]
    function dfs(idx){
        if(res.length===k){
            ans.push(res.map(item => item));
        }else if(res.length<k){
            for(let i=idx;i<=n;i++){
                res.push(i);
                dfs(i+1);
                res.pop();
            }
        }
    }
    dfs(1)
    return ans;
};
// @lc code=end

