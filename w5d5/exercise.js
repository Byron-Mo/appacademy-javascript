// Function.prototype.myBind = function() {
//   var fn = this;
//
//   (function (fn, context) {
//     return fn.apply([context])
//   });
// };

var myBind = function(fn, context) {
  return function() {
    return fn.apply(context);
  }
}

var b = myBind(console.log, console, 1, 2, 3);
b();

Array.prototype.two_sum = function() {
  var locations = [];

  this.forEach(function(element1, index1) {
    this.forEach(function(element2, index2){

      if ( index2 > index1 && element1 + element2 === 0 ) {
        locations.push([index1, index2]);
      }
    })
  }.myBind(this))
  return locations;
}

var array = [-1, 0, 2, -2, 1];
console.log(array.two_sum)

// obj = {
//   name: "Earl Watts"
// };
//
// function greet(msg) {
//   console.log(msg + ': ' + this.name);
// }
//
// greet.apply(obj, ["hello"]);
