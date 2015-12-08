/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(){
    this.asteroids = [];
    this.bullets = [];

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.addAsteroid();
    };

    console.log(this.bullets[0])
    this.ship = new Asteroids.Ship({game: this});
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 20;

  Game.prototype.addBullet = function() {
    this.bullets.push(new Asteroids.Bullet({game: this}));
  };

  Game.prototype.addAsteroid = function() {
    var randPos = [Math.floor((Math.random() * Game.DIM_X)),
      Math.floor((Math.random() * Game.DIM_Y))];
    var newAsteroid = new Asteroids.Asteroid({pos: randPos, game: this});
    this.asteroids.push(newAsteroid);
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var allObjects = this.allObjects();
    allObjects.forEach(function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    var allObjects = this.allObjects();

    allObjects.forEach(function(object) {
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var x = pos[0] % Game.DIM_X;
    var y = pos[1] % Game.DIM_Y;

    if(x < 0 ){
      x = Game.DIM_X;
    }
    if(y < 0 ){
      y = Game.DIM_Y;
    }
    return [x, y];
  };

  Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] < 0 || pos[0] > Game.DIM_X || pos[1] < 0 || pos[1] > Game.DIM_Y) {
      return true;
    }
    return false;
  }

  Game.prototype.checkCollisions = function(){
    var game = this;
    var allObjects = this.allObjects();

    for (var i = 0; i <= allObjects.length; i++) {
      for (var j = i + 1; j < allObjects.length; j++) {
        if (allObjects[i].isCollidedWith(allObjects[j])) {
          allObjects[i].collideWith(allObjects[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(object) {
    var index;

    if (object instanceof Asteroids.Ship) {
      
    } else if (object instanceof Asteroids.Asteroid) {
      index = this.asteroids.indexOf(object);
      this.asteroids.splice(index, 1);
    } else if (object instanceof Asteroids.Bullet) {
      index = this.bullets.indexOf(object);
      this.bullets.splice(index, 1);
    }
  };

  Game.prototype.allObjects = function() {
    var everything = this.asteroids.concat([this.ship]).concat(this.bullets);
    return everything;
  };

  Game.prototype.randPos = function() {
    var xPos = Math.floor(Math.random() * Game.DIM_X);
    var yPos = Math.floor(Math.random() * Game.DIM_Y);
    return [xPos, yPos];
  }

})();
