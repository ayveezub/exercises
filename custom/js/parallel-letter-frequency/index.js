const trim = text => text.toLowerCase().replaceAll(/^[0-9 _\\.]+$/g, "")

const countLettersInText = text => {
  const frequency = {}

  for (let char of text) {
    if (char in frequency) {
      frequency[char]++
    } else {
      frequency[char] = 1
    }
  }

  return frequency
}

async function freq(texts) {
  if (!texts) return {}

  const frequencies = await Promise.all(texts.map(text => countLettersInText(trim(text))))
  const totalFrequency = {}

  for (let frequency of frequencies) {
    for (let char in frequency) {
      if (char in totalFrequency) {
        totalFrequency[char] += frequency[char]
      } else {
        totalFrequency[char] = frequency[char]
      }
    }
  }

  return totalFrequency
}

module.exports = freq
