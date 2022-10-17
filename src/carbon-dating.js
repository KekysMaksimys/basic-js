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
 function dateSample(str) {
  if(str === undefined || typeof str !== 'string') return false;
  let n = +str;
  let k = 1209424; // -9
  let t;
  if(isNaN(n) || str === ' \n\t\r') return false;
  if(n > 15 || n <= 0) return false;
  t = (Math.log(15/n))/k;
  return Math.ceil(t* 10000000000);
}

module.exports = {
  dateSample
};
