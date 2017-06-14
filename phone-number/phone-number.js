var PhoneNumber = function(phone) {
  this.phone = phone.replace(/\D/g,'');
  this.phoneArr = this.phone.split('');
};


PhoneNumber.prototype.number  = function(){

  if (this.phoneArr.length === 11 && this.phoneArr[0] === '1'){
    this.phoneArr.shift();
    return this.phoneArr.join('');
  }else if (this.phone.split('').length !== 10 && this.phone.split('')[0] !== 1){
    return '0000000000';
  }else{
    return this.phone;
  }
};



PhoneNumber.prototype.areaCode = function(){
  return this.phone.slice(0,3);
};

PhoneNumber.prototype.toString = function() {
  return `(${this.phone.slice(0,3)}) ${this.phone.slice(3,6)}-${this.phone.slice(6,10)}`;
};

module.exports = PhoneNumber;
