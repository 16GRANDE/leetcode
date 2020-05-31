/*
 * @Author: your name
 * @Date: 2020-05-31 15:39:27
 * @LastEditTime: 2020-05-31 15:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\leetcode answer\5425. 切割后面积最大的蛋糕.js\
 */ 

// 矩形蛋糕的高度为 h 且宽度为 w，给你两个整数数组 horizontalCuts 和 verticalCuts，其中 horizontalCuts[i] 是从矩形蛋糕顶部到第  i 个水平切口的距离，类似地， verticalCuts[j] 是从矩形蛋糕的左侧到第 j 个竖直切口的距离。

// 请你按数组 horizontalCuts 和 verticalCuts 中提供的水平和竖直位置切割后，请你找出 面积最大 的那份蛋糕，并返回其 面积 。由于答案可能是一个很大的数字，因此需要将结果对 10^9 + 7 取余后返回。

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a,b)=> a-b)
  verticalCuts.sort((a,b)=> a-b)
  horizontalCuts.push(h)
  verticalCuts.push(w)
  let hmax=0,wmax=0
  horizontalCuts.reduce((pre,cur)=>{
      hmax=Math.max(cur-pre,hmax)
      return cur
  },0)
  verticalCuts.reduce((pre,cur)=>{
      wmax=Math.max(cur-pre,wmax)
      return cur
  },0)
  return (hmax*wmax)%(10**9 + 7)
};
