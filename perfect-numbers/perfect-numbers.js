var PerfectNumbers = function(){
  this.classify = function(number){
    this.number = number;
    this.divisableBy = [];
    for (let i=2; i<=number; i++){
      const num = number/i;
      if(num%1 === 0){
        this.divisableBy.push(num);
      }
    }
    this.sum = this.divisableBy.reduce((a, b) => a + b, 0);
    if(this.number <1){
      return 'Classification is only possible for natural numbers.';
    }else if(this.sum > this.number){
      return 'abundant';
    }else if(this.sum < this.number){
      return 'deficient';
    }else{
      return 'perfect';
    }
  };
};

module.exports = PerfectNumbers;
