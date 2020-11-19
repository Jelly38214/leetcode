/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if(s.length % 2 !== 0) {return false}

  /**
   * push every left parentheses
   * Three cases about right parentheses
   *  1. whether stack is empty
   *  2. the top of stack is not the left part of the right parentheses
   *  3. the top of stack is the left part, then continue the loop
   * Finally check stack is empty or not.
   */
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ss = s[i];
    if (ss === '(' || ss === '{' || ss === '[') {
      stack.unshift(ss);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const left = stack.shift();
      if (left === '(' && ss !== ')') { return false }
      if (left === '{' && ss !== '}') { return false }
      if (left === '[' && ss !== ']') { return false }
    }
  }

  return !stack.length;
};
// @lc code=end

