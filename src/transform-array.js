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
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 
  if(arr.length == 0){
    return [];
  }
  let arrCopy = arr.slice();
  for(let i = 0; i < arrCopy.length; i++){
    switch(arrCopy[i]){
      case '--discard-next':
        if(i + 1 == arrCopy.length){
          arrCopy.splice(i);
        } else{
          arrCopy.splice(i, i+2);
        }
        break;
      case '--discard-prev':
        if(i == 0){
          arrCopy.splice(i, 1);
        } else{
          arrCopy.splice(i - 1, i + 1);
        }
        break;
      case '--double-next':
        if(i + 1 == arrCopy.length){
          arrCopy.splice(i);
        } else{
          arrCopy[i] = arrCopy[i+1];
        }
        break;
      case '--double-prev':
        if(i == 0){
          arrCopy.splice(i, 1);
        } else{
          arrCopy[i] = arrCopy[i-1];
        }
        break;
    }
  }
  return arrCopy;
}

module.exports = {
  transform
};
