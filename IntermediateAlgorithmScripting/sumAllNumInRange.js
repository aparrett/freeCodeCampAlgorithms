function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  return triangleNumber(max) - triangleNumber(min - 1);
}

function triangleNumber(n) {
  return (n * (n + 1)) / 2;
}