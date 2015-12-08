Array.prototype.uniq = function () {
  var uniques = [];
  this.forEach(function(element){
    var match = false;

    uniques.forEach(function(uniqElement){
      if (uniqElement === element){
        match = true;
      }
    });

    if (match === false){ uniques.push(element) }

  });
    // if (uniques.find(element) === undefined)
    // uniques.push(element);
  return uniques;
};
var array = [1,2,3,4,5,5];
var uniqs = array.uniq();

console.log(array);
console.log(uniqs);
