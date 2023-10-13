/*

Write a function that takes a single string (word) as argument.
The function must return an ordered list
containing the indexes of all capital letters in the string.


Example

  Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] )


*/

const isUpperCase = str => str === str.toUpperCase()

let capitals = function (word) {
	return word.split('').reduce((acc, currentLetter, currentInd) => {
    if (isUpperCase(currentLetter)) return acc.concat(currentInd)
    return acc
  }, [])
}
