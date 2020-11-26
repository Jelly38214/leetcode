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
var rangeSumBST = function (root, low, high) {
  /**
   *  深度优先遍历
   *  当前节点 X < L 时则返回右子树之和
   *  当前节点 X > R 时则返回左子树之和
   *  当前节点 X >= L 且 X <= R 时则返回：当前节点值 + 左子树之和 + 右子树之和
   */
  if (root === null) { return 0 }

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
// @lc code=end

