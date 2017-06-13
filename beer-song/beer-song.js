var BeerSong = function() {
  this.song = function (verse){
    if (verse>2){
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse-1} bottles of beer on the wall.\n`;
    }else if (verse === 2){
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse-1} bottle of beer on the wall.\n`;
    }else if (verse === 1){
      return `${verse} bottle of beer on the wall, ${verse} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
    }else {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
  };
};


BeerSong.prototype.verse = function (verse){
  return this.song(verse);
};

BeerSong.prototype.sing = function(startVerse, endVerse){
  if (!endVerse){
    endVerse=0;
  }
  let versesSung = '';
  while(startVerse !== endVerse) {
    versesSung += this.song(startVerse) +'\n';
    startVerse --;
  }
  return versesSung + this.song(endVerse);
};

module.exports = BeerSong;
