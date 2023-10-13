const findAverage = array => {
  if (array.length === 0) return 0
  
  const sum = array.reduce((acc, currentNum) => acc + currentNum)
  
  return sum / array.length
}
