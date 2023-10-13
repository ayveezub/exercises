/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
  spinWords( "This is a test") => returns "This is a test" 
  spinWords( "This is another test" )=> returns "This is rehtona test"


In this solution:

  - Function `spinWords` takes a single argument `string`, which is the input string.
  - We use the `replace` method on the input string with a regular expression and a callback function as arguments.
  - The regular expression `/\b\w{5,}\b/g` matches words with 5 or more characters:
      - `\b` matches a word boundary (i.e., the position between a word character and a non-word character).
      - `\w{5,}` matches a word character (letters and digits) that appears at least 5 times.
      - The `g` flag makes the regular expression global, so it matches all occurrences in the input string.

  - The callback function `match => match.split('').reverse().join('')` is an arrow function that takes a single argument `match`, which represents the matched word.
      - `match.split('')` splits the matched word into an array of characters.
      - `reverse()` reverses the array of characters.
      - `join('')` joins the reversed array back into a string.

  - The `replace` method returns a new string with all matched words reversed.


*/

function spinWords(string){
  return string.replace(/\b\w{5,}\b/g, match => match.split('').reverse().join(''))
}
