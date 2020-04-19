/**
 * 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。

你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。

请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let res=nums[0]
  let sum=nums[0]
  for(let i=0;i<nums.length-1;++i){
      sum +=nums[i+1]
      res=res<sum ? res : sum
  }
  return res<0 ? 1-res : 1
};