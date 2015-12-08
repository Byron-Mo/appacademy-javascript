function Clock () {
  this.currentTime = new Date();
  this.printTime();
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  var time = this.currentTime.getHours() + ":" +
            this.currentTime.getMinutes() + ":" +
            this.currentTime.getSeconds();
  console.log(time);
};

Clock.prototype._tick = function () {
  this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
  this.printTime();
};

// var clock = new Clock();

var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }
  reader.question("Give me a number ",
      function (answer){
    var number = parseInt(answer);
    sum += number;
    console.log("partial sum: " + sum);
    numsLeft -= 1;
    addNumbers(sum, numsLeft, completionCallback);
  });
}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });

function askIfGreaterThan(el1, el2, callback){
  reader.question("Is " + el1 + " > " + el2 + "? ", function (answer){
      if (answer === "yes" || answer === 'y') {
        var bool = true;
      } else {
        var bool = false;
      }
  callback(bool);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        arr[i + 1] = [arr[i], arr[i]=arr[i+1]][0];
        madeAnySwaps = true;
      }
      if (i === (arr.length - 2)) {
        outerBubbleSortLoop(madeAnySwaps);
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallback){

  function outerBubbleSortLoop(madeAnySwaps){
    if( madeAnySwaps === true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else{

      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
