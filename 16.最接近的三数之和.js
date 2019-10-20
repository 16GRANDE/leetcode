/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>{return a-b});
    let lastest=nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length-2;i++){
        let l=i+1,r=nums.length-1;
        while(l<r){
            let res=nums[i]+nums[l]+nums[r];
        if(Math.abs(target-res)<Math.abs(target-lastest)){
            lastest=res;
        }
        if(res>target){
            r--;
        }else if(res<target){
            l++;
        }else{
            return target;
        }
    }
    }
    return lastest;
};
// @lc code=end

