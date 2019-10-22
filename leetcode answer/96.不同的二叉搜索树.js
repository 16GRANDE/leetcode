/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let ans = 1;
    for (let i = n + 1; i <= 2 * n; i++) {
        ans = ans * i / (i - n);
    }
    return ans / (n + 1)
};

