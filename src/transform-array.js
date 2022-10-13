const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let resArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== '--double-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next') resArr.push(arr[i]);

    if(arr[i] === '--discard-prev' && i !== 0) {
      resArr.pop();
    }

    if(arr[i] === '--discard-next' && i !== arr.length - 1) {
      i++;
    }

    if(arr[i] === '--double-prev' && i !== 0) {
      resArr.push(arr[i - 1]);
    }

    if(arr[i] === '--double-next' && !arr[arr.length - 1]) {
      resArr.push(arr[i + 1]);
    }
  }
  return resArr;
}

module.exports = {
  transform
};
