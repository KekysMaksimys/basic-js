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
  calculateDepth(a) {
    let max = 0;
  function func(array){
    if(Array.isArray(array)){
      return max = 1 + Math.max(0, ...array.map(func))
    } else {
      return 0;
    }
  }
  func(a);
  return max;  
  }
}


module.exports = {
  DepthCalculator
};
