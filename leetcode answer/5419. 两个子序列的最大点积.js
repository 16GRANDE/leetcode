/*
 * @Author: your name
 * @Date: 2020-05-25 15:46:10
 * @LastEditTime: 2020-05-25 15:47:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\leetcode answer\5419. 两个子序列的最大点积.js
 */ 
// 给你两个数组 nums1 和 nums2 。

// 请你返回 nums1 和 nums2 中两个长度相同的 非空 子序列的最大点积。

// 数组的非空子序列是通过删除原数组中某些元素（可能一个也不删除）后剩余数字组成的序列，但不能改变数字间相对顺序。比方说，[2,3,5] 是 [1,2,3,4,5] 的一个子序列而 [1,5,3] 不是。

//  

// 示例 1：

// 输入：nums1 = [2,1,-2,5], nums2 = [3,0,-6]
// 输出：18
// 解释：从 nums1 中得到子序列 [2,-2] ，从 nums2 中得到子序列 [3,-6] 。
// 它们的点积为 (2*3 + (-2)*(-6)) = 18 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
  // let a=new Array(nums1.length+1).fill(0)
  let dp = new Array(nums1.length+1).fill(0).map(() => new Array(nums2.length+1).fill(Number.MIN_SAFE_INTEGER))
  for(let i=1;i<=nums1.length;i++){
      for(let j=1;j<=nums2.length;j++){
          dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j],dp[i-1][j-1]+nums1[i-1]*nums2[j-1],nums1[i-1]*nums2[j-1])
      }
  }
  return dp[nums1.length][nums2.length]
};