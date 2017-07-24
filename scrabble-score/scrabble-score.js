function score(word){

  this.score = {
    1: 'AEIOULNRST',
    2: 'DG',
    3: 'BCMP',
    4: 'FHVWY',
    5: 'K',
    8: 'JX',
    10: 'QZ'
  };

  let count = 0;

  if(word === null || word.length<1){
    return 0;
  }else{
    const arr = word.toUpperCase().split('');
    arr.forEach((letter) => {
      for (let i=1; i<=10; i++){
        if (this.score[i] && this.score[i].includes(letter)){
          count += i;
        }
      }
    });
  }
  return count;

}

module.exports = score;
