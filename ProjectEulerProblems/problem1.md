
# Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

## Solution

To solve this problem, we first find the sum of the multiples of 3.

If n is 9, the sum of the multiples of 9 equals 18. 

```3 + 6 + 9 = 18```

```3 + 6 + 9 can be simplified to 3(1 + 2 + 3)```

After simplifying the equation, the value inside the parentheses is a [triangle number](https://en.wikipedia.org/wiki/Triangular_number).  In this case, it is the triangle number of 3.  To arrive at the value that we need to triangle, we do n / 3.

The formula for calculating a triangle number is

```(n * (n + 1)) / 2```

so we create a function to handle this calculation.

```js
function triangleNumber(n) {
  return (n * (n + 1)) / 2;
}
```

Now, we arrive at the function to calculate the sum of all of the multiples of a number. We use Math.floor because n may not always be divisble by 3.

```js
function sumMultiples(n, k) {
  return k * triangleNumber(Math.floor(n / k));
}
```

To get the result of our multiplesOf3and5 function, we get the sum of the multiples of 3 and the sum of the multiples of 5 and we add them together.  Then, we subtract that total by the sum of the multiples of 15 to get rid of the duplicate numbers that are multiples of 3 and 5.  Also, because we are finding all of the multiples below the given number, we must first subtract n.

```js
function multiplesOf3and5(n) {
  n = n - 1;
  return sumMultiples(n, 3) + sumMultiples(n, 5) - sumMultiples(n, 15);
}
```
