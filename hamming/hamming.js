
var Hamming = function() {};

Hamming.prototype.compute = function(input1, input2) {
  const arr1 = input1.split('');
  const arr2 = input2.split('');

  if (arr1.length !== arr2.length) {
    throw new Error('DNA strands must be of equal length.');
  }else{
    let count = 0;
    for (let i=0; i<arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        count = count +1;
      }
    }
    return count;  
  }


};

module.exports = Hamming;
