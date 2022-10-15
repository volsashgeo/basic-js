const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strRes = '';
  // let obj = {};
  let arr = [...str];
  let count = 1;
  console.log(arr)

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i + 1]) {
      count++;
    }else {
      if(count === 1) strRes += `${arr[i]}`;
      else strRes += `${count}${arr[i]}`;
      count = 1;
    }

  }
  return strRes;
}

module.exports = {
  encodeLine
};
