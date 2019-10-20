/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var x1 =x.toString().split('');
    var x2 =x1.filter(judge);
    function judge(value){
        while(!(value==="-"))
            return value;
    }
    if(x1[0]==="-")
        var result =x1[0]+x2.reverse().join("");
    else
        var result =x2.reverse().join("");
    result =parseInt(result);
    if(result>(Math.pow(2,31)-1)||result<-Math.pow(2,31))
        return 0;
    else
        return result;
};
// @lc code=end

