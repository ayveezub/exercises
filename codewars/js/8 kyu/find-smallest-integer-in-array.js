/*

In this solution:

  - To find the smallest integer in an array, you can use the `Math.min()` function along with the spread operator (`...`) to expand the array into individual arguments.

*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
