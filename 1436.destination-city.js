/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  if (paths.length === 1) {
    return paths[0][1];
  }
  const flatten = paths.reduce((prev, next) => prev.concat(next), []);
  let city = "";
  let collect = {};

  for(let i=0; i<flatten.length; i++) {
    const path = flatten[i];
    collect[path] = path in collect ? ++collect[path] : 1;
  }

  for (let key in collect) {
    if (collect[key] === 1 && flatten.indexOf(key) % 2 !== 0) {
      city = key;
      break;
    }
  }

  return city;
};
// @lc code=end
