function toRoman(number){
  this.values= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  this.numberedResults = [];
  this.answer = [];
  this.conversions = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  this.values.forEach((value) => {
    while(number - value >= 0) {
      number -= value;
      this.numberedResults.push(value);
    }
  });

  this.numberedResults.forEach((number) => {
    this.answer.push(this.conversions[number]);
  });
  return this.answer.join('');

}
module.exports = toRoman;
