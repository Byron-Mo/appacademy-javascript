Function.prototype.myBind = function(context){
  var fn = this;
  return function(){
    fn.apply(context);
  };
};
//
// function Clock () {
//   this.currentTime = new Date();
//   this.printTime();
//   setInterval(this._tick.myBind(this), 1000);
// }
//
// Clock.prototype.printTime = function () {
//   var time = this.currentTime.getHours() + ":" +
//             this.currentTime.getMinutes() + ":" +
//             this.currentTime.getSeconds();
//   console.log(time);
// };
//
// Clock.prototype._tick = function () {
//   this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
//   this.printTime();
// };
//
// var clock = new Clock();
