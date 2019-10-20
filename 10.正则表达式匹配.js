/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (s.length === 0 && p.length === 0)
        return true;
    if (s.length != 0 && p.length === 0)
        return false;
    const char = s[0];
    const pattern = p[0];
    const isStar = (p[1] === '*');
    if (!isStar) {
        if (char && (char === pattern || pattern === ".")) {
            return isMatch(s.slice(1), p.slice(1));
        } else {
            return false;
        }
    } else {
        if (char && (char === pattern || pattern === ".")) {
            return isMatch(s, p.slice(2)) || isMatch(s.slice(1), p.slice(2)) || isMatch(s.slice(1), p);
        } else {
            return isMatch(s, p.slice(2));
        }
    }

};

