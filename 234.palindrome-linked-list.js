/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) { return true };
  const stack = [];
  let current = head;

  while (current) {
    stack.unshift(current.val);
    current = current.next;
  }

  current = head;
  while (current) {
    if (stack.shift() !== current.val) {
      return false;
    }

    current = current.next;
  }

  return true;

};
// @lc code=end

