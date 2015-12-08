/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var COLOR = "yellow";
  var RADIUS = 50;

  var Asteroid = Asteroids.Asteroid = function (hash) {
    hash.vel = [Math.floor((Math.random() * 10) - 5),
      Math.floor((Math.random() * 10) - 5)];
    hash.color = COLOR;
    hash.radius = (Math.random() + 1) * 40;
    Asteroids.MovingObject.call(this, hash);
  };

 Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();
