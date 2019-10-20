/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    if(root.left){
        res.push(...inorderTraversal(root.left));
    }
    res.push(root.val)
    if(root.right){
        res.push(...inorderTraversal(root.right));
    }
    return res;
};
// @lc code=end

