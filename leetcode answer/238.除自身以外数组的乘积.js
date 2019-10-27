/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = 1,
    right = 1;
  let result = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; ++i) {
    result[i] *= left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};
// @lc code=end
