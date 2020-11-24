/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let total = {val: 0};
  inOrder(root, callback(total, low, high)); 
  return total.val;
};

function inOrder(node, callback) {
   if(node.left) {inOrder(node.left, callback)};
   callback(node.val);
   if(node.right) {inOrder(node.right, callback)}
}
   
function callback(total, low, high) {
  return (val) => {
    if(val >= low && val <= high) {total.val = total.val + val}; 
  }
}
// @lc code=end

