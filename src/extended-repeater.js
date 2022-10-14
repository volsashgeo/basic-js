const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(options === undefined) return str;
  if(options.separator === undefined) options.separator = '+';
  if(options.additionSeparator === undefined) options.additionSeparator = '|';
  if(options.addition === undefined) options.addition = '';
  if(typeof(str) !== "string") str = String(str);
  if(typeof(options.addition ) !== "string") options.addition  = String(options.addition );
  if(options.repeatTimes === undefined || typeof(options.repeatTimes) !== 'number') options.repeatTimes = 1;
  if(options.additionRepeatTimes === undefined || typeof(options.additionRepeatTimes) !== 'number') options.additionRepeatTimes = 1;
  options.separator = String(options.separator );
  options.additionSeparator = String(options.additionSeparator);


  for(let i = 0; i < options.additionRepeatTimes; i++) {
    if(i === 0) str += options.addition;
    else str += options.additionSeparator + options.addition;
  }
  let strRes = str;
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    strRes += options.separator + str;
  }

  return strRes;
}

module.exports = {
  repeater
};
