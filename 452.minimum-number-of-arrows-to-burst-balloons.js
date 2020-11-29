/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length <= 1) return points.length;

  points.sort((a, b) => a[1] - b[1]);

  let res = 1, r = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > r) { // 只要在箭的范围内，箭不需移动
      res++;
      r = points[i][1];
    }
  }

  return res;
};
// @lc code=end

