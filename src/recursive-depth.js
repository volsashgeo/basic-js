const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;
    let depth = 1;
    for (let depthArr of arr) {
      if (Array.isArray(depthArr)) {
        count = 1 + this.calculateDepth(depthArr);
      }
      if(count > depth) depth = count;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
