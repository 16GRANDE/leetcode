/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let tmp = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (tmp.has(nums[i])) {
            let ans = i - (tmp.get(nums[i]))
            if (ans <= k)
                return true;
            else
                tmp.set(nums[i], i);
        }
        else
            tmp.set(nums[i], i);
    }
    return false
};

