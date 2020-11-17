/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  // 遇到)并且栈为偶数，则匹配
  const stack = [];
  let counter = "";
  Array.prototype.map.call(S, (s) => {
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length === 1) {
        stack.length = 0;
      } else if (stack.length !== 0 && stack.length % 2 === 0) {
        counter += stack.splice(1).join("");
        counter+= ')';
      } else stack.push(s);
    }
  });

  return counter;
};
// @lc code=end
