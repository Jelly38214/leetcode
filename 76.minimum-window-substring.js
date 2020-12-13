/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = right = 0;

  let length = Infinity; // 滑动窗口的宽度, 初始化比s大就行啦
  let map = {};

  let match = 0; // right在s上移动过程中，遇到了t中字符的个数
  let start = 0; // 记录最短子串开始位置

  // 把字符串t中的字符通过hash存储起来
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!(char in map)) {
      map[char] = 0;
    }

    map[char] += 1;
  }

  // right指针到达s终端，结束移动
  while (right < s.length) {
    const char = s[right];

    // map中的字符减一如果小于0，说明在移动过程中出现了该字符串多次，而char中保存的对应该字符的在t中的次数被消耗光啦， 所以match不需要加一
    if (char in map) {
      map[char] -= 1;
      if (map[char] >= 0) match += 1
    }

    // 当前窗口已包含t中全部字符, 尝试left右移，缩小窗口条件
    while (match === t.length) {
      if (length > right - left + 1) {
        length = right - left + 1; // 缩小窗口
        start = left;
      }

      const char = s[left];
      left++;
      // map中的字符，在右指针移动时，遇到一个数量减一个，但为负数时，说明遇到过多啦
      // 反过来，在左指针移动时，遇到一个数量加一个，但为正数时，说明遇到窗口中数量该字符数量正好啦，不需要在左移动，不然它就可能少数量啦
      if (char in map) {
        if (map[char] === 0) match -= 1 // 等于0时说明对应字符出现的窗口的个数等同在t中的个数
        map[char] += 1;
      }
    }

    right++;
  }

  return length === Infinity ? '' : s.substring(start, start + length)
};
// @lc code=end

