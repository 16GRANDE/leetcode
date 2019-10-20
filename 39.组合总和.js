/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const list = [];
    backtrack(list,[],candidates, target, 0,candidates.length)
    return list;
};
function backtrack(list,tmp,candidates, target, l, r) {
    if (target==0) return list.push([...tmp])
    if (target<0) return;
    for (let i = l; i < r; i++) {
        tmp.push(candidates[i])
        backtrack(list,tmp,candidates, target - candidates[i], i, r)
        tmp.pop()
    }
}
