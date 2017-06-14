var Anagram = function (subject) {
  this.subject = subject;
  this.sortedSubject = subject.toLowerCase().split('').sort().join('');
};

Anagram.prototype.matches = function(matches, matches1, matches2){
  const sameLength = [];
  const correctMatches = [];
  if (typeof matches === 'string'){
    const arr = new Array();
    arr.push(matches);
    if (matches1) arr.push(matches1);
    if (matches2) arr.push(matches2);
    matches = arr;
  }

  matches.forEach((match) => {
    if (match.length === this.sortedSubject.length){
      sameLength.push(match);
    }
  });

  sameLength.forEach((match) => {
    const sortedMatch = match.toLowerCase().split('').sort('').join('');
    if (sortedMatch === this.sortedSubject && match.toLowerCase() !== this.subject){
      correctMatches.push(match);
    }
  });

  if (!correctMatches){
    return [];
  }else{
    return correctMatches;
  }
};


module.exports = Anagram;
