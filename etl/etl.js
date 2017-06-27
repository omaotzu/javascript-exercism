function ETL () {
  this.transform = function(input){
    this.transformed = {};

    for (let i=1; i<=10; i++){
      if(Object.keys(input).includes(i.toString())){
        input[i].forEach((value) => {
          const alteredKey = value.toString().toLowerCase();
          this.transformed[alteredKey] = i;
        });
      }
    }
    return this.transformed;
  };
}
module.exports = ETL;
