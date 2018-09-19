function multiplesOf3and5(n) {
  n = n - 1;
  return sumMultiples(n, 3) + sumMultiples(n, 5) - sumMultiples(n, 15);
}

function triangleNumber(n) {
  return (n * (n + 1)) / 2;
}

function sumMultiples(n, k) {
  return k * triangleNumber(Math.floor(n / k));
}

// first attempt

// function multiplesOf3and5(n) {
//   let sum = 0;

//   for (let i = 3; i < n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
  
//   return sum;
// }