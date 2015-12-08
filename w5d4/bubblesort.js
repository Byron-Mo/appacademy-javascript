Array.prototype.bubbleSort = function() {
  var sorted = false
  while (sorted === false){
    sorted = true;
    for (var i=0; i < this.length - 1; i ++){
      if (this[i] > this[i+1]){
        this[i+1] = [this[i], this[i]=this[i+1]][0]
        sorted = false
      }
    }
  }
};

var array = [3,6,4,7,9,2,8]
array.bubbleSort();
console.log(array);
