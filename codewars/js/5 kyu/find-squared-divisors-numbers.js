/*

`1, 246, 2, 123, 3, 82, 6, 41` are the divisors of number `246`. Squaring these divisors we get: `1, 60516, 4, 15129, 9, 6724, 36, 1681`. The sum of these squares is `84100` which is `290 * 290`.


Task:

Find all integers between `m` and `n` (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair). The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.


Example:

  list_squared(1, 250)  --> [[1, 1], [42, 2500], [246, 84100]]
  list_squared(42, 250) --> [[42, 2500], [246, 84100]]


In this solution:
  
  - `isSquare(num)`: checks if a number is a square by calculating its square root and checking if it's an integer.
  - `divisors(num)`: finds all divisors of a number by iterating up to its square root and adding both divisors to a set.
  - `sumSquaredDivisors(num)`: calculates the sum of squared divisors using `divisors()` and `reduce()` to sum up the squares.
  - `listSquared(m, n)`: generates an array of numbers between `m` and `n`, maps each number to an array containing the number and its sum of squared divisors, and filters the result based on whether the sum is a square.

  The code is optimized by only iterating up to the square root when finding divisors and using a set to store unique divisors.

*/

const isSquare = num => Number.isInteger(Math.sqrt(num))

const divisors = num => {
  const divs = new Set()
  
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divs.add(i)
      divs.add(num / i)
    }
  }
  
  return divs
}

const sumSquaredDivisors = num => {
  const divs = divisors(num)
  
  return Array.from(divs).reduce((sum, d) => sum + d * d, 0)
}

function listSquared(m, n) {
  return Array(n - m + 1)
    .fill(0)
    .map((_, i) => m + i)
    .map(num => [num, sumSquaredDivisors(num)])
    .filter(([_, sum]) => isSquare(sum))
}
