function exp(base, exponent) {
  if (exponent === 0){
    return 1;
  } else {
    return base * exp(base, exponent - 1);
  }
}

console.log(exp(2, 3));

function exp2(base, exponent) {
  switch (exponent) {
    case 0:
      return 1;
    case 1:
      return base;
    default:
      if (exponent % 2 === 0) {
        var expo = exp2(base, exponent / 2);
        return expo * expo;
      } else {
        var expo = exp2(base, (exponent - 1) / 2);
        return base * expo * expo;
      }
  }
}

console.log(exp2(2, 8))
