/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var s_map = {};
  var t_map = {};
  for (var i = 0; i < s.length; i++) {
    if (s_map[s[i]] !== t_map[t[i]]) {
      return false;
    }
    s_map[s[i]] = t_map[t[i]] = i;
  }

  return true;
};
// @lc code=end
