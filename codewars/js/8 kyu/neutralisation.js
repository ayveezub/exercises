const neutralise = (s1, s2) => {
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  
  return arr1.map((char, index) => {
    if (char === arr2[index]) return char
    if (char !== arr2[index]) return '0'
  }).join('')
}
