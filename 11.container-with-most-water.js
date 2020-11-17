/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * @description 定义i，j指针指向数组的左右两端，然后两指针向中间搜索，并更新面积最大值res，直到i==j，返回res
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1, res = 0;

  /**
   * 决定面积大小：长和宽
   * 高度高的不动，小的往内移动。每一次循环只有一个指针在移动，最后相等，停止循环
   * 循环的次数等于数组的长度-1，因为最后一次相等，不循环
   */
  while (i < j) {
    const width = j - i;
    if (height[i] < height[j]) { // i往内部移动
      res = Math.max(res, width * height[i++]);
    } else {
      res = Math.max(res, width * height[j--]); // j往内部移动
    }
  }

  return res;
};
// @lc code=end

