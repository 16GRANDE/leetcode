/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N==0||N==1)
        return N;
    let L=0;
    let R=1;
    for(i=2;i<=N;++i){
        let temp =L+R;
        L=R;
        R=temp;
    }
    return R;
};
// @lc code=end

