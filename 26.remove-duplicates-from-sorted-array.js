/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (i !== nums.lastIndexOf(nums[i])) {
      nums.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }
  return nums.length;
};
// @lc code=end
