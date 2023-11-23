const bigToSmall = arr => {
  let flattened = [].concat(...arr)
  let sorted = flattened.sort((a, b) => b - a)
  
  return sorted.join('>')
}
