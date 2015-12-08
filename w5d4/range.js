function range(start,end){
  if (start === end){
    return [end];
  }
  else{
    return [start].concat(range(start+1, end));
  }
}

console.log(range(3,15))
