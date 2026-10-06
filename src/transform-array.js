const { NotImplementedError } = require('../lib');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const deleted = new Set();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === "--discard-next") {
      const nextIdx = i + 1;
      if (nextIdx < arr.length) {
        deleted.add(nextIdx);
      }
    } else if (current === "--discard-prev") {
      const prevIdx = i - 1;
      if (prevIdx >= 0 && !deleted.has(prevIdx)) {
        deleted.add(prevIdx);
        if (result.length > 0) {
          result.pop();
        }
      }
    } else if (current === "--double-next") {
      const nextIdx = i + 1;
      if (nextIdx < arr.length && !deleted.has(nextIdx)) {
        result.push(arr[nextIdx]);
      }
    } else if (current === "--double-prev") {
      const prevIdx = i - 1;
      if (prevIdx >= 0 && !deleted.has(prevIdx)) {
        result.push(arr[prevIdx]);
      }
    } else {
      if (!deleted.has(i)) {
        result.push(current);
      }
    }
  }

  return result;
}

module.exports = {
  transform,
};
