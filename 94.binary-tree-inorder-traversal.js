/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
  if (root === null) return [];

  const r = [];

  inorderTraversalNode(root, r);

  return r;
};

var inorderTraversalNode = function (node, callback) {
  if (!node) { return null };
  if (node.left) {
    inorderTraversalNode(node.left, callback);
  }

  callback.push(node.val);

  if (node.right) {
    inorderTraversalNode(node.right, callback);
  }
}
// @lc code=end

