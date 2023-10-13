const countPositivesSumNegatives = input => {
  if (!input || input.length === 0) return []
  
  return input.reduce((acc, currentVal) => {
    let [positiveCount, negativeSum] = acc
    
    if (currentVal > 0) positiveCount++
    if (currentVal < 0) negativeSum += currentVal
    
    return [positiveCount, negativeSum]
  }, [0, 0])
}
