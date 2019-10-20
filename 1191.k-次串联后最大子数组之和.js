/*
 * @lc app=leetcode.cn id=1191 lang=javascript
 *
 * [1191] K 次串联后最大子数组之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    let sum = arr.reduce((prev, curr) => prev + curr)
    let arrmx = 0;
    let lmx = 0;
    let rmx = 0;
    for (let i = 0, cur = 0; i < arr.length; i++) {
        cur += arr[i]
        cur = Math.max(cur,arr[i])
        arrmx = Math.max(arrmx, cur)
    }
    for (let i = 0, cur = 0; i <arr.length; i++) {
        cur += arr[i]
        lmx = Math.max(lmx, cur)
    }
    for (let i = arr.length - 1, cur = 0; i >=  0; i--) {
        cur += arr[i]
        rmx = Math.max(rmx, cur)
    }
    if(Math.max(sum * k, arrmx, sum + lmx, sum + rmx, sum + lmx + rmx,lmx + rmx,sum*(k-2)+lmx+rmx)>0)
       return Math.max(sum * k, arrmx, sum + lmx, sum + rmx, sum + lmx + rmx,lmx + rmx,sum*(k-2)+lmx+rmx) % (Math.pow(10, 9) + 7);
    else
       return 0; 
};
// @lc code=end

