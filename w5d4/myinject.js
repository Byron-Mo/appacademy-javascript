require("./myeach.js");

Array.prototype.myInject = function(start, block){
  if (typeof(start) === 'undefined'){
    var loopArray = this.slice(1,this.length);
    var total = this[0];
  } else {
    var total = start;
    var loopArray = this;
  }
  // var total = slice[0];
  loopArray.myEach(function(element){
    total = block(total, element);
  });
  return total;
};

var arr = [1, 2, 3, 4, 5]
console.log(arr.myInject(5, function(total, element){return total + element}))
