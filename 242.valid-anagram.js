/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var record = {};
  for (var c of s) {
    record[c] = (record[c] || 0) + 1;
  }

  for (var c of t) {
    if (!record[c]--) {
      return false;
    }
  }

  return true;
};
// @lc code=end
