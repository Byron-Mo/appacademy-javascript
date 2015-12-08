Array.prototype.two_sum = function(){
  var locations = [];

  this.forEach(function(element1, index1){
    this.forEach(function(element2, index2) {

      if (index2 > index1) {
        if ((element1 + element2) === 0) {
          locations.push([index1, index2]);
        }
      }
    })
  }.bind(this))
  return locations;
}

var array = [-1, 0, 2, -2, 1];
console.log(array.two_sum())
