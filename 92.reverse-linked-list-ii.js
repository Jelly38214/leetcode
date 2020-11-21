/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  // 虚拟节点，简化操作
  const dummyHead = {
    next: head,
  };

  let cur = dummyHead.next; // 当前遍历的节点
  let pre = cur; // 因为要反转，因此我们需要记住前一个节点
  let index = 0; // 链表索引，用来判断是否是特殊位置（头尾位置）

  // 上面提到的四个特殊节点
  let p1 = p2 = p3 = p4 = null;

  while (cur) {
    const next = cur.next;
    index++;

    // 对 (m - n) 范围内的节点进行反转
    if (index > m && index <= n) {
      cur.next = pre;
    }

    // 下面四个if都是边界, 用于更新四个特殊节点的值
    if (index === m - 1) {
      p1 = cur;
    }
    if (index === m) {
      p2 = cur;
    }

    if (index === n) {
      p3 = cur;
    }

    if (index === n + 1) {
      p4 = cur;
    }

    pre = cur;

    cur = next;
  }

  // 两个链表合并起来
  (p1 || dummyHead).next = p3; // 特殊情况需要考虑
  p2.next = p4;

  return dummyHead.next;
};
// @lc code=end

