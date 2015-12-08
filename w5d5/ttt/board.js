function Board() {
  this.grid = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
}

Board.prototype.won = function() {
  function isX(element) {
    return element === 'X';
  }

  function isO(element) {
    return element === 'O';
  }

  //horizontal
  this.grid.forEach(function(array){
    if (array.every(isX) || array.every(isO)) {
      return true;
    }
  });
  //vertical
  var array = this.grid;
  var vertArrays = array[0].map(function(col, i) {
    return array.map(function(row) {
    return row[i];
    });
  });
  vertArrays.forEach(function(col){
    if (col.every(isX) || col.every(isO)) {
      return true;
    }
  });
  //diagonal
  var diagonals = [[array[0][0], array[1][1], array[2][2]],
    [array[0][2], array[1][1], array[2][0]]];
  diagonals.forEach(function(diag){
    if (diag.every(isX) || diag.every(isO)) {
      return true;
    }
  });
  return false;
};

Board.prototype.catsGame = function(){
  var flattened = this.grid.reduce(function(a,b,c){
    return a.concat(b).concat(c);
  });
  for (var i = 0; i < flattened.length; i++) {
    if (flattened[i] === '_'){
      return false;
    }
  }
  return true;
};

// Board.prototype.winner = function(Game) {
//   if (this.won === true) {
//     return Game.previousPlayer();
//   }
// };

Board.prototype.empty = function(pos) {
  var row = pos[0];
  var col = pos[1];
  if (this.grid[row][col] === '_') {
    return true;
  } else {
    return false;
  }
};

Board.prototype.placeMark = function(pos, mark) {
  var row = pos[0];
  var col = pos[1];
  this.grid[row][pos] = mark;
};

module.exports = Board;
