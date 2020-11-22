/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head, p = null) {
  if (!head) return p;
  c = head;

  const n = c.next;
  c.next = p;
  p = c;
  c = n;
  return reverseList(c, p)
};
// @lc code=end

