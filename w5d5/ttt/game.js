var Board = require('./board.js');



function Player(name){
  this.name = name;
}

function Game(reader, player1, player2) {
  this.board = new Board();
  this.reader = reader;
  this.player1 = new Player(player1);
  this.player1.mark = 'X';
  this.player2 = new Player(player2);
  this.player2.mark = 'O';
  this.currentPlayer = player1;
}

Game.prototype.play = function(completionCallback){
  console.log("I'M HEREEEE");
  while (this.board.won() === false && this.board.catsGame() === false){
    this.render();
    this.reader.question("Enter the row of your next move: ", function (rowI) {
      this.reader.question("Enter the column of your next move: ", function (colI) {
        var pos = [parseInt(rowI), parseInt(colI)];
        if (this.board.empty() === true){
          this.board.placeMark(pos, this.currentPlayer.mark);
        }
        else{
          console.log("Invalid move!");
          this.play(completionCallback);
        }
      });
    });
    this.switchPlayer();
  }
  if (this.board.catsGame() === true) {
    console.log("Cat Game!");
  } else if (this.board.won() === true) {
    this.switchPlayer();
    console.log(this.currentPlayer + " Wins!");
  }
  completionCallback();
};

Game.prototype.render = function() {
  this.board.grid.forEach = function(row) {
    console.log(row);
  };
};

Game.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
};
module.exports = { Game: Game, Player: Player };
