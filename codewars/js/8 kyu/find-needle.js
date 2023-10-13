const findNeedle = haystack => {
  const needleInd = haystack.findIndex(element => element === 'needle')
  
  return `found the needle at position ${needleInd}`
}
