const used = [];
var Robot = function (){

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function randomLetters(){
    return `${alphabet[Math.floor((Math.random() * 26))]}${alphabet[Math.floor((Math.random() * 26))]}`;
  }
  function randomNumbers(){
    return `${Math.floor((Math.random() * 10))}${Math.floor((Math.random() * 10))}${Math.floor((Math.random() * 10))}`;
  }

  this.compileName = function() {
    return `${randomLetters()}${randomNumbers()}`;
  };

  this.createName = function(){
    let name = this.compileName();

    while(used.includes(name)){
      name = this.compileName();
    }

    used.push(name);
    return name;
  };

  this.name = this.createName();

  this.reset = function () {
    this.name = this.createName();
  };

};

module.exports = Robot;
