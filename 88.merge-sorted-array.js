/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let pos = m-- + n-- - 1;
  while (m >= 0 && n >= 0) {
    nums1[pos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }

  // 如果nums2还没复制完，继续
  // nums1本来就排好序的，即使没复制完也没问题
  while(n>=0) {
    nums1[pos--] = nums2[n--];
  }
};
// @lc code=end

