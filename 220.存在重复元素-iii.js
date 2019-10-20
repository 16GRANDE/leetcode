/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if(nums.length<2){return false;}
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<=i+k&&j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])<=t){
                return true;
            }
        }
    }
    return false;
};


