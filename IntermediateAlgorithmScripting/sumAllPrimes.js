function sumPrimes(num) {
  let result = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) result += i;
  }

  return result;
}

function isPrime(num) {
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false; 
  }
  
  return num !== 1 && num !== 0;
}