const lowercaseCount = str => {
  const matches = str.match(/[a-z]/g)
  
  if (!matches) return 0
  return matches.length
}
