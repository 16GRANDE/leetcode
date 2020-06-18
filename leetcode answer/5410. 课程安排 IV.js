/*
 * @Author: your name
 * @Date: 2020-05-31 22:55:17
 * @LastEditTime: 2020-06-18 21:17:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\leetcode answer\5410. 课程安排 IV.js
 */

// 你总共需要上 n 门课，课程编号依次为 0 到 n-1 。

// 有的课会有直接的先修课程，比如如果想上课程 0 ，你必须先上课程 1 ，那么会以 [1,0] 数对的形式给出先修课程数对。

// 给你课程总数 n 和一个直接先修课程数对列表 prerequisite 和一个查询对列表 queries 。

// 对于每个查询对 queries[i] ，请判断 queries[i][0] 是否是 queries[i][1] 的先修课程。

// 请返回一个布尔值列表，列表中每个元素依次分别对应 queries 每个查询对的判断结果。

// 输入：n = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
// 输出：[false,true]
// 解释：课程 0 不是课程 1 的先修课程，但课程 1 是课程 0 的先修课程。

/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (n, prerequisites, queries) {
  let a = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (let item of prerequisites) {
    a[item[0]][item[1]] = true;
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (a[i][k] && a[k][j]) a[i][j] = true;
      }
    }
  }

  let res = [];
  for (let item of queries) {
    res.push(a[item[0]][item[1]]);
  }
  return res;
};
