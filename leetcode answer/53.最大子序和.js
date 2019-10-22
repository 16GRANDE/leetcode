/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = 0, max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        res += nums[i];
        if (res > max)
            max = res;
        if (res < 0)
            res = 0;
    }
    return max;
};

