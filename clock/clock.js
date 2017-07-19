var Clock = function (hours, minutes){
  if(!minutes) minutes = 0;
  if(minutes>=60){
    hours += Math.floor(minutes/60);
    minutes = minutes%60;
  }
  if(hours<0){
    hours = (hours%24) + 24;
  }
  if(minutes<0){
    hours += (Math.floor(minutes/60)%24) + 24;
    minutes = minutes%60 +60;
  }
  hours = hours % 24;
  this.hours = hours;
  this.minutes = minutes;
};
Clock.prototype.toString = function() {
  if(this.minutes<10) this.minutes = ('0' + this.minutes).slice(-2);
  if (this.hours<10) this.hours = ('0' + this.hours).slice(-2);
  return `${this.hours}:${this.minutes}`;
};

Clock.at = function(hour, minutes){
  return new Clock(hour, minutes);
};

Clock.prototype.plus = function(minutes){
  return new Clock(this.hours, this.minutes + minutes);
};
Clock.prototype.minus = function(minutes){
  return new Clock(this.hours, this.minutes - minutes);
};
Clock.prototype.equals =function(secondClock){
  return (this.hours === secondClock.hours) && (this.minutes === secondClock.minutes);
};




module.exports = Clock;
