require("./myeach.js");

Array.prototype.myMap = function (block) {
  var mappedArray = [];
  this.myEach (function(element){
    mappedArray.push(block(element));
  })
  return mappedArray;
}

var array = [1,2,3,4,5]

function print(thing){
  console.log(thing * 2)
}

array.myMap(print)
