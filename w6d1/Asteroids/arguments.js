var mySum = function() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  args.forEach(function(num) {
    total += num;
  });
  return total;
};

// console.log(sum());

Function.prototype.myBind = function(context) {
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  var fn = this;

  return function() {
    var invokeArgs = Array.prototype.slice.call(arguments);
    var allArgs = bindArgs.concat(invokeArgs);
    fn.apply(context, allArgs);
  };
};



var curriedSum = function(numArgs){
  var numbers = [];
  function _curriedSum(oneNum){
    numbers.push(oneNum);
    if(numbers.length === numArgs){
      var sum = 0;
      numbers.forEach(function(n){
        sum += n;
      });
      return sum;
    }else{
      return _curriedSum;
    }
  }
  return _curriedSum;
};

// var sum = curriedSum(4);
// // sum(5)(30)(20)(1); // => 56
// console.log(sum(5)(30)(20)(1));



Function.prototype.myCurry = function(numArgs){
  var fn = this;
  var myArgs = [];
  function _myCurry(oneArg){
    myArgs.push(oneArg);
    if(myArgs.length === numArgs){
      return fn.apply(null, myArgs);
    }else{
      return _myCurry;
    }
  }
  return _myCurry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
var f1 = sumThree.myCurry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30

// or more briefly:
console.log(sumThree.myCurry(3)(4)(20)(6)); // == 30
