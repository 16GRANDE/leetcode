/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let a = [];
    let num = [];
    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(")
            a.push(i)
        else if (s[i] == ")") {
            let pop = a.pop()
            num[i] = pop
            num[pop] = i
        }
    }
    let f = 1;
    for (let i = 0; i < s.length; ) {

        if (s[i] == "(" || s[i] == ")") {
            i = num[i];
            f = -f;
        }
        else {
            result.push(s[i]);
        }
        i+=f
    }
    return result.join("");
};
// @lc code=end

