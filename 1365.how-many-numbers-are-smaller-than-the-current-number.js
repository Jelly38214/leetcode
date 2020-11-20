/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const temp = new Array(101).fill(0);

  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] += 1;
  }

  for (let i = 1; i <= 100; i++) {
    temp[i] += temp[i - 1]; // 小于等于i数值的个数
  }

  return nums.map((item) => item ? temp[item - 1] : 0);

};
// @lc code=end

