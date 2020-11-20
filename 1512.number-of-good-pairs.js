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
var numIdenticalPairs = function (nums) {
  /**
   * 数k出现次数n形成全排列n(n-1), 符合i<j，只有一半n*(n-1)/2
   */
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] ? ++count[nums[i]] : 1;
  }

  let res = 0;
  for (let key in count) {
    res += (count[key] * (count[key] - 1)) / 2
  }
  return res;
};
// @lc code=end

