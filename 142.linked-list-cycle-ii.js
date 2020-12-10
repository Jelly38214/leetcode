/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = slow = head;

  do {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
  } while (fast != slow);

  fast = head; // 让fast移到链头
  while(fast !== slow) { // 让slow，fast每次向前走一步，相遇时就是环路的开始点
    fast = fast.next;
    slow = slow.next; 
  }

  return fast
};
// @lc code=end

