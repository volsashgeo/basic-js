const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...String(n)];
  let arrRes = [];
  for(let i = 0; i < arr.length; i++) {
      arr.splice(i, 1);
      let str = arr.join("");
      arrRes.push(Number(str));
      arr = [...String(n)];
  }
  return Math.max(...arrRes);
}

module.exports = {
  deleteDigit
};
