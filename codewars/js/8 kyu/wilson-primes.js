const factorial = n => {
  if (n === 0n) return 1n

  return n * factorial(n - 1n)
}

const amIWilson = p => {
  const bigP = BigInt(p)
  
  return ((factorial(bigP - 1n) + 1n) % (bigP * bigP)) === 0n
}
