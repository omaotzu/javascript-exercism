var Pangram = function(input) {
  this.value=input;
};

Pangram.prototype.isPangram = function() {
  const input = this.value;
  const alphabet = ('abcdefghijklpmnoqrstuvwxyz').split('');
  const nospace = input.replace(/ /g, '').toLowerCase();
  let missingLetterCount = 0;

  alphabet.forEach((char) => {
    const index = nospace.indexOf(char);
    if (index ===-1){
      missingLetterCount = missingLetterCount + 1;
    }
  });
  if (missingLetterCount > 0) {
    return false;
  }else{
    return true;
  }
};

module.exports= Pangram;
