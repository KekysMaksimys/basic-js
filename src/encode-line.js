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
  let res = '';
  let arr = str.split('');
  let count = 1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i+1] && count > 1){
      res = res + count + arr[i];
      count = 1;
    } else if(arr[i] !== arr[i+1] && count == 1) {
      res = res + arr[i];
      count = 1;
    } else{
      count++;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
