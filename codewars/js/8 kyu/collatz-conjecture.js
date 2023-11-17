const hotpo = n => {
  if (n === 0) return 0
  
  let steps = 0
  
  while (n !== 1) {
      n = (n % 2 === 0) ? n / 2 : 3 * n + 1
      steps++
  }

  return steps
}
