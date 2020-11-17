/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 * @description {string} 0 1 1 2 3 5 8 13 21 34 55
 */
var fib = function(N) {
  if (N <= 1) {
    return N;
  }

  let pre = 0,
    next = 1,
    r = 1;

    let j = 1;
  
  // 递归展开
  while (j !== N) {
    r = pre + next;
    pre = next;
    next = r;
    j++
  }

  return r;  
};
// @lc code=end

