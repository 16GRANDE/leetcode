/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let num = nums.map((value,index)=>{
        let res=0;
        for(let i=0;i<=index;i++){
            res += nums[i];
        }
        return res;
    })
    let dp =new Array(m+1).fill(0).map(()=> new Array(nums.length).fill(Infinity));
    for(let i=0;i<nums.length;i++){
       dp[1][i]=num[i];
    }
    for(let i=2;i<=m;i++){
        for(let j=i-1;j<nums.length-m+i;j++){
            for(let k=0;k<j;k++){
                dp[i][j]=Math.min(dp[i][j],Math.max(dp[i-1][k],num[j]-num[k]));
            }
        }
    }
    return dp[m][nums.length-1];
};

