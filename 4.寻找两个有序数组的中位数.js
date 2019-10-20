/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArray=nums1.concat(nums2).sort(function(a,b){return a-b});
    let mid=newArray.length/2;
    if(newArray.length%2===0)
        return (newArray[mid] + newArray[mid-1])/2;
    else
        return newArray[Math.floor(mid)];
};
// @lc code=end

