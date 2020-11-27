/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (root === null) return [];
  let r = [];
  postorderTraversalNode(root, r);
  return r;
};

var postorderTraversalNode = function (node, callback) {
  if (node) {
    if (node.left) { postorderTraversalNode(node.left, callback) }
    if (node.right) { postorderTraversalNode(node.right, callback) }
    callback.push(node.val);
  }
}
// @lc code=end

