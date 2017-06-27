function Triangle(side1, side2, side3){
  this.sides = [side1, side2, side3].sort(function(a, b){
    return a - b;
  });

  const count = {};
  for (var i=0; i<this.sides.length; i++) {
    const side = this.sides[i];
    if (count[side]) {
      count[side]++;
    }else {
      count[side] = 1;
    }
  }

  this.kind = function(){
    if(side1 <=0 || side2<=0 || side3<=0){
      this.toThrow();
    }else if(this.sides[0]+this.sides[1] < this.sides[2]){
      this.toThrow();
    }else if(Object.values(count).includes(3)){
      return 'equilateral';
    }else if (Object.values(count).includes(2)) {
      return 'isosceles';
    }else {
      return 'scalene';
    }
  };
}

module.exports = Triangle;
