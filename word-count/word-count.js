function Words(){
  this.count = function(string){
    string= string.replace(/[!&@$%^&:,.¡¿?]/g, ' ').toLowerCase();
    string = string.replace(/\s+/g, ' ');
    string = string.replace(/\s'|'\s/g, ' ');

    this.arr = string.split(' ') || string.split('');

    const numOf = {};

    for (var i=0; i<this.arr.length; i++) {
      const word = this.arr[i];
      if (numOf[word]>= 1) {
        numOf[word]++;
      }else {
        numOf[word] = 1;
      }
    }
    delete numOf[''];
    console.log(numOf);
    return numOf ;
  };
}
module.exports = Words;
