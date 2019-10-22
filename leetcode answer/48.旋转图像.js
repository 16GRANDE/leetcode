/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let abs1=0
    let abs2=matrix.length-1
    while(abs1<=abs2){
        let p1=abs1
        let p2=abs2
        while(p1!=abs2){
            [matrix[abs1][p1],matrix[p2][abs1],matrix[abs2][p2],matrix[p1][abs2]]=[matrix[p2][abs1],matrix[abs2][p2],matrix[p1][abs2],matrix[abs1][p1]]
            p1 +=1
            p2 -=1
        }
        abs1+=1
        abs2-=1
    }
};

