var School = function (){
  this.students = {};

  this.add = function(name, grade){
    if(Object.keys(this.students).includes(grade.toString())){
      this.students[grade].push(name);
      this.students[grade].sort();
    }else{
      this.students[grade] = [name];
    }
  };

  this.roster = function(){

    return this.students;
  };

  this.grade = function(year) {
    if (!this.students[year]){
      return [];
    }else{
      return this.students[year];
    }
  };
};


module.exports = School;
