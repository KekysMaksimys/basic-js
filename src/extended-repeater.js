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
  let repeat = options.repeatTimes;
  let str1 = str;
  if(Object.keys(options).length === 1){
    while(repeat > 1){
      repeat--;
      str += '+' + str1;
    }
  }
  if((options.separator !== undefined) && (options.addition !== undefined)){
    let additionRepeat = options.additionRepeatTimes;
    str = str + options.addition;
    str1 = str;
    while(repeat > 1){
      repeat--;
      str += options.separator + str1;
    }
  }
  if(options.separator !== undefined){
    while(repeat > 1){
      repeat--;
      str += options.separator + str1;
    }
  }
  return str;
}

module.exports = {
  repeater
};
