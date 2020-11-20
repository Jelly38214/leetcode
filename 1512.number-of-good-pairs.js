/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums, r = 0, x = nums[0],) {
  if (!nums.length) {
    return r;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === x) {
      r++;
    }
  }
  nums.shift();
  return numIdenticalPairs(nums, r)
};
// @lc code=end

