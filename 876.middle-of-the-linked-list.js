/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
var middleNode = function (head) {
  // Use two pointers: slow, fast, slow move by one, fast move by two
  let slow = head, fast = head;
  while (fast && fast.next !== null) { // loop until fast is the last node.
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// @lc code=end

