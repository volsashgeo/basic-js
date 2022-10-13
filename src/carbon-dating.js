const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string') return false;
  if(Number(sampleActivity) <= 0) return false;
  function getBaseLog(y) {
    return Math.log(y) / Math.log(Math.E);
  }

  let result = getBaseLog(MODERN_ACTIVITY/Number(sampleActivity)) * HALF_LIFE_PERIOD / getBaseLog(2);

  if(Number(result) > 0) return Math.ceil(result);
  else return false;
}

module.exports = {
  dateSample
};
