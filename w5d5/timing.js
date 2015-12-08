function Clock () {
};

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  console.log(this.currentTime.getHours() + ":" +
  this.currentTime.getMinutes() + ":" +
  this.currentTime.getSeconds());
};

Clock.prototype.run = function () {
  this.currentTime = new Date();
  this.printTime();
  this._tick();
};

Clock.prototype._tick = function () {
  setInterval(function() {
    this.currentTime.setSeconds(this.currentTime.getSeconds() + 5);
  }, 5000 );
  this.printTime();
}

var clock = new Clock();
clock.run();

// var count = 0
// setInterval(function() {
//    console.log(count++)
// }, 1000)
