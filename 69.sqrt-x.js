
/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] sqrt x 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(a) {
  // 求解f(x) = x^2 - a = 0
  // 转化成区间[0, a], 使用二分查找来找到f(x) = 0的解
  // 牛顿迭代法：  xn+1 = (xn + a/xn)/2
  let x = a;
  while(x * x > a) {
    x =Math.floor((x + a / x) / 2) 
  }
  
  return Math.floor(x);
};
// @lc code=end
