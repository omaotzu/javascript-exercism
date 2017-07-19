function SpaceAge(seconds){
  this.seconds = seconds;

  this.planet =
  { 'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 365.25,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132
  };

  this.earthYears = this.seconds/60/60/24/365.25;

  this.calculation = function(yearLength){
    return parseFloat((this.earthYears/yearLength).toFixed(2));
  };


  this.onEarth = function(){
    return parseFloat(this.earthYears.toFixed(2));
  };
  this.onMercury = function(){
    return this.calculation(this.planet['Mercury']);
  };
  this.onVenus = function(){
    return this.calculation(this.planet['Venus']);
  };
  this.onMars = function(){
    return this.calculation(this.planet['Mars']);
  };
  this.onJupiter = function(){
    return this.calculation(this.planet['Jupiter']);
  };
  this.onSaturn = function(){
    return this.calculation(this.planet['Saturn']);
  };
  this.onUranus = function(){
    return this.calculation(this.planet['Uranus']);
  };
  this.onNeptune = function(){
    return this.calculation(this.planet['Neptune']);
  };
}
module.exports = SpaceAge;
