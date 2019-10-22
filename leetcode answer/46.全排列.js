/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const list = []
    backtrack(list, [], nums)
    return list
};

function backtrack(list, templist, nums) {
    if (templist.length == nums.length)
        return list.push([...templist])
    for (let i = 0; i < nums.length; i++) {
        if (templist.includes(nums[i])) continue;
        templist.push(nums[i])
        backtrack(list, templist, nums)
        templist.pop()
    }
}


