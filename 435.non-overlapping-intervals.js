/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length <= 1) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let r = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    // 判断是否🍌
    if (r[r.length - 1][1] <= intervals[i][0]) {
      r.push(intervals[i]);
    }
  }

  return intervals.length - r.length;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = eraseOverlapIntervals;
// @after-stub-for-debug-end