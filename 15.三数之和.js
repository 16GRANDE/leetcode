/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b});
    var res=[];
    for(let i=0;i<nums.length;i++){
        if(i==0||nums[i]>nums[i-1]){
            let j=i+1;
            let la=nums.length-1;
            while(j<la){
                let s=nums[i]+nums[j]+nums[la];
                if(s==0){
                    res.push([nums[i],nums[j],nums[la]]);
                    j +=1;
                    la -=1;
                    while(nums[j]==nums[j-1])
                        j +=1;
                    while(nums[la]==nums[la+1])
                        la -=1;
                }
                else if(s>0)
                    la -=1;
                else
                    j +=1;
            }
        }
    }
    return res;
};
// @lc code=end

