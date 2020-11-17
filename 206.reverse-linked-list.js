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
  if (!head) {
    return head;
  }

  const stack = [];
  let current = head;
  while (current.next !== null) { // Make sure the current is the last one node.
    stack.push(current);
    current = current.next;
  }

  head = current;
  while (stack.length) {
    current.next = stack.pop();
    current = current.next;
  }

  current.next = null; // Make the last one node's next to be null

  return head;
};
// @lc code=end

