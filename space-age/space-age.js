function SpaceAge(seconds){
  this.seconds = seconds;
  // I have abrieviated extraTerrestrial to et because I am not going to write that out again and again and also stuck the values in so I could do it without copying and pasting the values from the README.
  this.et = {'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 365.25,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132
  };

  this.calculation = function(yearLength){
    if(yearLength === this.et['Earth']){
      return parseFloat((this.seconds/60/60/24/365.25).toFixed(2));
    }else{
      return parseFloat((this.seconds/60/60/24/365.25/yearLength).toFixed(2));
    }
  };

  this.onEarth = function(){
    return this.calculation(this.et['Earth']);
  };
  this.onMercury = function(){
    return this.calculation(this.et['Mercury']);
  };
  this.onVenus = function(){
    return this.calculation(this.et['Venus']);
  };
  this.onMars = function(){
    return this.calculation(this.et['Mars']);
  };
  this.onJupiter = function(){
    return this.calculation(this.et['Jupiter']);
  };
  this.onSaturn = function(){
    return this.calculation(this.et['Saturn']);
  };
  this.onUranus = function(){
    return this.calculation(this.et['Uranus']);
  };
  this.onNeptune = function(){
    return this.calculation(this.et['Neptune']);
  };
}
module.exports = SpaceAge;
