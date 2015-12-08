/* global Asteroids */

(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(hash) {
    this.pos = hash.pos;
    this.vel = hash.vel;
    this.radius = hash.radius;
    this.color = hash.color;
    this.game = hash.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.move = function() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.isWrappable === true) {
      this.pos = this.game.wrap(this.pos);
    } else {
      if (this.game.isOutOfBounds(this.pos)) {
        this.game.remove(this);
      }
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var disX = this.pos[0] - otherObject.pos[0];
    var disY = this.pos[1] - otherObject.pos[1];
    var distanceBetween = Math.sqrt(disX*disX + disY*disY);
    var radiiSum = this.radius + otherObject.radius;
    if (radiiSum > distanceBetween){
      return true;
    }else{
      return false;
    }
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    if (this instanceof Asteroids.Asteroid &&
      otherObject instanceof Asteroids.Ship) {
        otherObject.relocate();
    } else if (this instanceof Asteroids.Asteroid &&
      otherObject instanceof Asteroids.Bullet) {
        this.game.remove(otherObject);
        this.game.remove(this);
    }
  };
})();
