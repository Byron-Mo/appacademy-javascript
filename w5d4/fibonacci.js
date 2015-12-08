function fibonacci(n){
  if (n === 1){
    return 0
  }
  else if (n === 2){
    return [0,1]
  }
  else {
    var priorNumbers = fibonacci(n-1)
    var lastNum = priorNumbers[priorNumbers.length-1];
    var secondLast = priorNumbers[priorNumbers.length-2];
    var newNum = [lastNum + secondLast];
    return priorNumbers.concat(newNum)
  }
}

console.log(fibonacci(10));
