Array.prototype.my_transpose = function() {
  var originalArray = this;
  var numColumns = originalArray[0].length;
  var transposedArray = [];
  for (var i=0 ; i < numColumns ; i++){
    transposedArray.push([]);
  }
  originalArray.forEach(function(row, index1){
    row.forEach(function(element, index2){
      transposedArray[index2][index1] = element;
    })
  })
  return transposedArray;
};
