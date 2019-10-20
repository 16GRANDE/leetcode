/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [root.val];
    if(root.left){
        res.push(...preorderTraversal(root.left));
    }
    if(root.right){
        res.push(...preorderTraversal(root.right));
    }
    return res;
};
// @lc code=end

