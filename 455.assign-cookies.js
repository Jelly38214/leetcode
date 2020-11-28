/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 都进行升序排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = cookie = 0;
  // 遍历s寻找满足最小g的child的cookie
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) child++
    cookie++
  }
  return child;
};
// @lc code=end

