function squareOrSquareRoot(array) {
  return array.map(num => {
    let sqrt = Math.sqrt(num)
    
    if (sqrt === Math.floor(sqrt)) return sqrt
    if (sqrt !== Math.floor(sqrt)) return num * num
  })
}
