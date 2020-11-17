/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let result = '';
  for(let i=0; i<str.length; i++) {
    let charCode = str.charCodeAt(i);
    // it's the chartset [A-Z]
    if(charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
};
// @lc code=end
