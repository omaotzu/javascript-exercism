
var Bob = function() {
  this.answers = {
    '!': 'Whoa, chill out!',
    '?': 'Sure.',
    '.': 'Whatever.'
  };
};

Bob.prototype.hey = function (input) {
  const arr = input.replace(/ /g, '').split('');
  let numOfLowerCase = 0;

  arr.forEach((char) => {
    if (char === char.toLowerCase()){
      numOfLowerCase++;
    }
  });

  if (arr[arr.length-1] === '!' && numOfLowerCase === arr.length-1) {
    return 'Whatever.';
  }else if (input.toUpperCase() === input && input.match(/[a-z]/i)){
    return 'Whoa, chill out!';
  }else if(input.replace(/ /g, '').length === 0){
    return 'Fine. Be that way!';
  }
  return this.answers[arr[arr.length-1]] || 'Whatever.';
};

module.exports = Bob;
