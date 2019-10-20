/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp;
    while(s.length){
        temp =s;
        s=s.replace("{}","").replace("()","").replace("[]","");
        if(temp==s)
            return false;
    }
    
    return s=="";
};
// @lc code=end

