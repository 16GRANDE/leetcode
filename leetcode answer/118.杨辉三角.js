/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr=[]
    for(let i=0;i<numRows;i++){
        let tmp=[]
        for(let j=0;j<=i;j++){
            if(j==0||j==i)
                tmp.push(1);
            else
                tmp.push(arr[i-1][j-1]+arr[i-1][j])
        }
        arr.push(tmp)
    }
    return arr
};
// @lc code=end

