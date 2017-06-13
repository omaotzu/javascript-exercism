var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function (){
  const arr = this.word.toLowerCase().replace(/[^a-z|é|à]/g, '').split('');

  const unique = [];
  const duplicates = [];

  arr.forEach((char) => {
    const index = unique.indexOf(char);
    if (index === -1){
      unique.push(char);
    }else{
      duplicates.push(char);
    }
  });
  if (duplicates.length === 0){
    return true;
  }else{
    return false;
  }

};

module.exports = Isogram;
