function HanoiGame() {
  this.stacks = [[3, 2, 1], [], []];
}

HanoiGame.prototype.isWon = function() {
  if (this.stacks[2].length === 3) {
    return true;
  }
  else {
  return false;
  }
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];

  if (startTower.length === 0) {
    return false;
  }

  var lastStart = startTower.length - 1;

  if (endTower.length === 0){
    return true;
  } else if (startTower[lastStart] < endTower[endTower.length - 1]){
    return true;
  }
  else {
    return false;
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx) {
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];

  if (this.isValidMove(startTowerIdx, endTowerIdx) === true){
    endTower.push(startTower.pop());
    return true;
  }
  else {
    return false;
  }
};

HanoiGame.prototype.print = function(){
  console.log(JSON.stringify(this.stacks));
};

  var readline = require('readline');
  var reader = readline.createInterface(process.stdin,
                                        process.stdout, null);

// var readline = require('readline');
// var reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

HanoiGame.prototype.promptMove = function(callback){
  this.print();
  reader.question("Enter Index of Starting Stack: ", function (sIdx) {
    reader.question("Enter Index of Ending Stack: ", function (eIdx) {
      var startTowerIdx = parseInt(sIdx);
      var endTowerIdx = parseInt(eIdx);
      callback(startTowerIdx, endTowerIdx);
    });
  });
};

HanoiGame.prototype.run = function(completionCallback){
  var game = this;
  this.promptMove(function(startTowerIdx, endTowerIdx) {
    var madeMove = game.move(startTowerIdx, endTowerIdx);
  // this.promptMove(this.move);
    if( madeMove === false){
      console.log("Invalid Move!");
      game.run(completionCallback);
    }
    else if ( madeMove === true ){
      if (game.isWon() === true){
      console.log("You win!");
      completionCallback();
    } else if (game.isWon() === false){
      game.run(completionCallback);
      // completionCallback();
      }
    }
  });
};

var game = new HanoiGame();
game.run(reader.close.bind(reader));
