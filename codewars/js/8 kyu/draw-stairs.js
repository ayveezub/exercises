const drawStairs = n => {
  return Array.from({ length: n }).reduce((acc, _, i) => {
    return acc + ' '.repeat(i) + 'I' + '\n'
  }, '').slice(0, -1)
}
