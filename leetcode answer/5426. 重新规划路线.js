/*
 * @Author: your name
 * @Date: 2020-05-31 16:10:44
 * @LastEditTime: 2020-05-31 17:45:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\leetcode answer\5426. 重新规划路线.js
 */ 
// n 座城市，从 0 到 n-1 编号，其间共有 n-1 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。

// 路线用 connections 表示，其中 connections[i] = [a, b] 表示从城市 a 到 b 的一条有向路线。

// 今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。

// 请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。

// 题目数据 保证 每个城市在重新规划路线方向后都能到达城市 0 。

// 输入：n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// 输出：3

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  let s= new Set()
  s.add(0)
  let res=0
  for(let item of connections){
      if(s.has(item[1])){
          s.add(item[0])
      }else{
          res++
          s.add(item[1])
      }
  }
  return res
};