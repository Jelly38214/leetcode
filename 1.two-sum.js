/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (map[target - current] !== undefined) {
      return [i, map[target - current]];
    }

    map[current] = i;
  }
};
// @lc code=end

