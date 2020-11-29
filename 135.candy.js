/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // 这里的贪心策略即为，在每次遍历中，只考虑并更新相邻一侧的大小关系。
  if (ratings.length === 0) return 0;
  if (ratings.length === 1) return 1;

  let c = new Array(ratings.length).fill(1);

  // 从左到右遍历
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      c[i] = c[i - 1] + 1;
    }
  }

  // 从右到左遍历
  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      c[i - 1] = Math.max(c[i-1], c[i] + 1);
    }
  }

  return c.reduce((prv, next) => prv + next);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = candy;
// @after-stub-for-debug-end