/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    if(root.left){
        res.push(...postorderTraversal(root.left));
    }
    if(root.right){
        res.push(...postorderTraversal(root.right));
    }
    res.push(root.val)
    return res;
};
// @lc code=end

