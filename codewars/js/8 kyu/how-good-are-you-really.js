const betterThanAverage = (classPoints, yourPoints) => {
  const sum = classPoints.reduce((acc, currentVal) => acc + currentVal, 0)
  
  return yourPoints > sum / classPoints.length
}
