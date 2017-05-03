var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (input) {
  const dna = ['G', 'C', 'T', 'A'];
  const rna = ['C', 'G', 'A', 'U'];

  const converted = [];

  const arr = input.split('');

  arr.forEach((char) => {
    const index =  dna.indexOf(char);
    if (index === -1) {
      throw new Error('Invalid input');
    }else{
      converted.push(rna[index]);
    }
  });
  if (converted.length>0) {
    return converted.join('');
  }
};

module.exports = DnaTranscriber;
