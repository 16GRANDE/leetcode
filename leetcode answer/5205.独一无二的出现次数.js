/*
 * @lc app=leetcode.cn id=5205 lang=javascript
 *
 * [5205] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let tmp = new Map()
    for(let i=0;i<arr.length;i++){
        if(tmp.has(arr[i])){
            tmp.set(arr[i],tmp.get(arr[i])+1)
        }else{
            tmp.set(arr[i],1)
        }
    }
    let tmpvalue=tmp.values()
    let ans=[]
    for(let item of tmpvalue){
        if(ans.includes(item)){
            return false
        }else{
            ans.push(item)
        }
    }
    return true
};
// @lc code=end

