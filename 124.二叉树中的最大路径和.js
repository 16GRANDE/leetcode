/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let value = -Infinity
    const find = (node) => {
        if(!node) return 0
        let left = find(node.left)
        let right = find(node.right)
        let lmr = node.val + Math.max(0,left) + Math.max(0,right)
        value = Math.max(value, lmr)
        return node.val + Math.max(0, Math.max(left,right))
    }
    find(root)
    return value
};
// @lc code=end

