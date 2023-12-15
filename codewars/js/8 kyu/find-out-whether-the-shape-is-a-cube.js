const cubeChecker = (volume, side) => {
  if (volume <= 0 || side <= 0) return false
  if (Math.pow(side, 3) === volume) return true
  return false
}
