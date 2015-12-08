String.prototype.substrings = function(){
  var substrings = []
  for (var i=0; i<this.length; i++){
    for (var j=i+1; j<=this.length; j++){
      substrings.push(this.slice(i,j));
    }
  }
  return substrings;
}

var str = 'cat';
console.log(str.substrings());
