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
var reverseList = function (head) {
  if (!head) { return null };
  if (!head.next) { return head };

  let current = head;
  const vals = [];
  while (current) {
    vals.unshift(current.val);
    current = current.next;
  }
  current = head;
  while (current) {
    current.val = vals.shift();
    current = current.next;
  }

  return head;
};
// @lc code=end

