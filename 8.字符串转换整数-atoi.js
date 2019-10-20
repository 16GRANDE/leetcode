/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(!parseInt(str.trim().split(' ')[0])){
        return 0;
    }
    var res=parseInt(str.trim());
    if(res>(Math.pow(2,31)-1)){
        return Math.pow(2,31)-1;
    }
    if(res<-Math.pow(2,31)){
        return -Math.pow(2,31);
    }
    return res;
};
// @lc code=end

