/*
 * @Author: your name
 * @Date: 2020-06-21 17:07:26
 * @LastEditTime: 2020-06-21 17:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\leetcode answer\5442. 避免洪水泛滥.js
 */ 

// 你的国家有无数个湖泊，所有湖泊一开始都是空的。当第 n 个湖泊下雨的时候，如果第 n 个湖泊是空的，那么它就会装满水，否则这个湖泊会发生洪水。你的目标是避免任意一个湖泊发生洪水。

// 给你一个整数数组 rains ，其中：

// rains[i] > 0 表示第 i 天时，第 rains[i] 个湖泊会下雨。
// rains[i] == 0 表示第 i 天没有湖泊会下雨，你可以选择 一个 湖泊并 抽干 这个湖泊的水。
// 请返回一个数组 ans ，满足：

// ans.length == rains.length
// 如果 rains[i] > 0 ，那么ans[i] == -1 。
// 如果 rains[i] == 0 ，ans[i] 是你第 i 天选择抽干的湖泊。
// 如果有多种可行解，请返回它们中的 任意一个 。如果没办法阻止洪水，请返回一个 空的数组 。

// 输入：rains = [1,2,3,4]
// 输出：[-1,-1,-1,-1]
// 解释：第一天后，装满水的湖泊包括 [1]
// 第二天后，装满水的湖泊包括 [1,2]
// 第三天后，装满水的湖泊包括 [1,2,3]
// 第四天后，装满水的湖泊包括 [1,2,3,4]
// 没有哪一天你可以抽干任何湖泊的水，也没有湖泊会发生洪水。

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
  let res = new Array(rains.length).fill(-1) //答案
  let t = {} //湖泊第几天下雨
  let tmp = [] //不下雨的天数
  for(let i=0;i<rains.length;i++){
      if(rains[i]){
          if(t[rains[i]]!==undefined){
              let l=0 
              while(l<tmp.length&&tmp[l]<t[rains[i]]){
                  l++
              }
              if(l===tmp.length) return []
              res[tmp[l]]= rains[i]
              tmp.splice(l,1)
          }
          t[rains[i]]=i
      }else{
          res[i]=1
          tmp.push(i)
      }
  }
  return res
};