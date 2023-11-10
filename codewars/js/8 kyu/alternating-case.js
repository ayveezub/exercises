String.prototype.toAlternatingCase = function () {
  let chars = [...this]
  
  let result = chars.map(char => {
   if (char === char.toUpperCase()) return char.toLowerCase()
   if (char !== char.toUpperCase()) return char.toUpperCase()
  })
  
  return result.join('')
}
