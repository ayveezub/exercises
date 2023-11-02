const trimNonAlphabeticChars = text => text.toLowerCase().replaceAll(/^[0-9 _\\.]+$/g, "")

const countLetters = text => {
  const frequency = {}

  for (let char of text) {
    if (char in frequency) frequency[char]++
    if (char in frequency === false) frequency[char] = 1
  }

  return frequency
}

const mergeResults = frequencies => {
  const totalFrequency = {}

  for (let frequency of frequencies) {
    for (let char in frequency) {
      if (char in totalFrequency) totalFrequency[char] += frequency[char]
      if (char in totalFrequency === false) totalFrequency[char] = frequency[char]
    }
  }

  return totalFrequency
}

async function freq(texts) {
  if (!texts) return {}

  const frequencies = await Promise.all(
    texts.map(text => countLetters(trimNonAlphabeticChars(text)))
  )

  return mergeResults(frequencies)
}

module.exports = freq
