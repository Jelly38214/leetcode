/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l !== r) {
    const total = numbers[l] + numbers[r];
    if (total === target) { return [l + 1, r + 1] }
    if (total < target) { l++ }
    if (total > target) { r-- }
  }
};
// @lc code=end

