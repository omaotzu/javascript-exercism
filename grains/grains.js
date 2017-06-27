const bigInt = require('./big-integer');

function Grains(){

  const numToSq = [1,2];
  let total = 3;
  for (let i=2; i<64; i++){
    const obj= bigInt(numToSq[i-1]).times(2);
    numToSq.push(obj);
    total = bigInt(total).add(bigInt(obj));
  }

  this.square = function(input){
    return (numToSq[input-1]).toString();
  };

  this.total = function(){
    return total.toString();
  };


}
module.exports = Grains;
