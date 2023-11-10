function distanceBetweenPoints(a, b) {
  let x = b.x - a.x
  let y = b.y - a.y
  
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}
