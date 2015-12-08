(function(){
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var COLOR = "red";
  var RADIUS = 10;

  var Bullet = Asteroids.Bullet = function(hash) {
    hash.pos = [0, 0];
    hash.vel = [0, 0];
    hash.color = COLOR;
    hash.radius = RADIUS;
    Asteroids.MovingObject.call(this, hash);
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.travel = function() {
    this.pos = this.game.ship.pos;
    this.vel[0] += this.game.ship.vel[0]*7;
    this.vel[1] += this.game.ship.vel[1]*7;
  }

  Bullet.prototype.isWrappable = false;
})();
