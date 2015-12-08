/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function() {
    this.game = new Asteroids.Game();
    var canvasEl = document.getElementsByTagName("canvas")[0];
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;

    this.ctx = canvasEl.getContext("2d");
  };

  GameView.MOVES = {
    'w': [0, -1],
    'a': [-1, 0],
    's': [0, 1],
    'd': [1, 0]
  };

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.game.ship;
    var bullet = this.game.bullets[0];

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { ship.power(move);});
    });

    key('space', function() { ship.fireBullet(); });
  }

  GameView.prototype.start = function() {
    var game = this.game;
    var ctx = this.ctx;
    this.bindKeyHandlers();

    setInterval(function(){
      game.step();
      game.draw(ctx);
    }, 20);
  };


})();
