function sumFibs(num) {
  let result = 1;
  let current = 1; // current Fibonacci number
  let last = 1; // last Fibonacci number

  while (current <= num) {
    if (current % 2 !== 0) result += current;

    const sum = current + last;
    last = current;
    current = sum;
  }

  return result;
}