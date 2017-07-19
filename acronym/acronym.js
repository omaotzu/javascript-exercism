function parse(input){
  const arr = input.split(/\W+/);
  const result = arr.map(function(word) {
    const firstLetter = word.charAt(0).toUpperCase();
    if(word.match(/^[A-Z]+$/)) {
      return firstLetter;
    }
    return firstLetter + word.slice(1).replace(/[^A-Z]/g, '');
  });
  return result.join('');
}


module.exports= {parse};
