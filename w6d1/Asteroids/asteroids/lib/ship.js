/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var COLOR = "blue";
  var RADIUS = 20;

  var Ship = Asteroids.Ship = function(hash) {
    hash.color = COLOR;
    hash.radius = RADIUS;
    hash.vel = [0, 0];
    hash.pos = [Asteroids.Game.DIM_X / 2 , Asteroids.Game.DIM_Y / 2];
    Asteroids.MovingObject.call(this, hash);
  };


  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randPos();
  };

  Ship.prototype.power = function(impulse) {
    for (var i = 0; i < impulse.length; i++) {
      this.vel[i] = this.vel[i] + impulse[i];
    }
  }

  Ship.prototype.fireBullet = function() {
    this.game.addBullet();
    var bullet = this.game.bullets[this.game.bullets.length - 1];
    bullet.travel();
  }
})();
