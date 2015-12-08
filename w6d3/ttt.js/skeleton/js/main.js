var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  // Your code here
  var $newEl = $(".ttt");
  var game = new Game();
  new View(game, $newEl);
});
