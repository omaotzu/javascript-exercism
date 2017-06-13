var Gigasecond = function(input) {
  this.startDay = input;
};

Gigasecond.prototype.date = function() {
  return new Date(this.startDay.getTime() + Math.pow(10,12));
};


module.exports = Gigasecond;
