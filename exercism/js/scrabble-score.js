/*

Given a word, compute the Scrabble score for that word.
Letter Values

You'll need these:

  Letter                           Value
  A, E, I, O, U, L, N, R, S, T       1
  D, G                               2
  B, C, M, P                         3
  F, H, V, W, Y                      4
  K                                  5
  J, X                               8
  Q, Z                               10

Examples

"cabbage" should be scored as worth 14 points:

  3 points for C
  1 point for A, twice
  3 points for B, twice
  2 points for G
  1 point for E

And to total:

  3 + 2*1 + 2*3 + 2 + 1
  = 3 + 2 + 6 + 3
  = 5 + 9
  = 14

Extensions

  You can play a double or a triple letter.
  You can play a double or a triple word.

*/

const letterValues = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
}

export const score = word => {
  return word.toLowerCase().split('').reduce((acc, currentLetter) => {
    return acc + letterValues[currentLetter]
  }, 0)
}
