/*给你一个整数数组 nums，请你找出并返回能被三整除的元素最大和。

示例 1：

输入：nums = [3,6,5,1,8]
输出：18
解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。
示例 2：

输入：nums = [4]
输出：0
解释：4 不能被 3 整除，所以无法选出数字，返回 0。
示例 3：

输入：nums = [1,2,3,4,4]
输出：12
解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
 

提示：

1 <= nums.length <= 4 * 10^4
1 <= nums[i] <= 10^4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    if(nums.length===1)
       return nums[0]%3!=0 ? 0:nums[0]
    let sum=0
    let t1=[],t2=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;++i){
        sum+=nums[i]
        if(nums[i]%3===1){
            t1.push(nums[i])
        }
        if(nums[i]%3===2){
            t2.push(nums[i])
        }
    }
    if(sum%3===1){
        if(t1[0]&&(t2[0]&&t2[1])){
            return sum-Math.min(t1[0],t2[0]+t2[1])
        }else if(t1[0]||(t2[0]&&t2[1])){
            return t1[0]? sum-t1[0]:sum-t2[0]-t2[1]
        }
    }else if(sum%3===2){
        if(t2[0]&&(t1[0]&&t1[1])){
            return sum-Math.min(t2[0],t1[0]+t1[1])
        }else if(t2[0]||(t1[0]&&t1[1])){
            return t2[0]? sum-t2[0]:sum-t1[0]-t1[1]
        }
    }else if(sum%3===0){
        return sum 
    }

    return 0
};