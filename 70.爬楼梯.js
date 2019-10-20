/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<3)
          return n;
       let L=1;
       let R=2;
       for(i=3;i<=n;++i){
           let num =L+R;
           L = R;
           R = num;
       }
       return R;
};
// @lc code=end

