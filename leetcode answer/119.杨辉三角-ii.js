/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr=[]
    for(let i=0;i<34;i++){
        let tmp=[]
        for(let j=0;j<=i;j++){
            if(j==0||j==i)
                tmp.push(1);
            else
                tmp.push(arr[i-1][j-1]+arr[i-1][j])
        }
        arr.push(tmp)
    }
    return arr[rowIndex]
};
// @lc code=end

