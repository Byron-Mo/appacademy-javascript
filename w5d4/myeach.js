Array.prototype.myEach = function(fun){
  for (var i=0; i< this.length; i++){
    fun(this[i]);
  }
}

function lame (thing){
  console.log(thing + "whoa")
}


module.exports = Array.prototype.myEach;
