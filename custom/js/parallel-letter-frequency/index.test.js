const freq = require('./index')

const tolkien = [
  `There, peeping among the cloud-wrack above a dark tower high up in the mountains, Sam saw a white star twinkle for a while. The beauty of it smote his heart, as he looked up out of the forsaken land, and hope returned to him. For like a shaft, clear and cold, the thought pierced him that in the end, the shadow was only a small and passing thing: there was light and high beauty forever beyond its reach.`
]

describe("Parallel Letter Frequency", () => {
  test("no texts", async () => {
    const totalFrequency = await freq()

    expect(totalFrequency).toMatchObject({})
  })

  test("one text with one letter", async () => {
    const totalFrequency = await freq(["a"])

    expect(totalFrequency).toMatchObject({"a": 1})
  })

  test("one text with multiple letters", async () => {
    const totalFrequency = await freq(["bbcccd"])

    expect(totalFrequency).toMatchObject({"b": 2, "c": 3, "d": 1})
  })

  test("two texts with one letter", async () => {
    const totalFrequency = await freq(["e", "f"])

    expect(totalFrequency).toMatchObject({"e": 1, "f": 1})
  })

  test("two texts with multiple letters", async () => {
    const totalFrequency = await freq(["ggh", "hhi"])

    expect(totalFrequency).toMatchObject({"g": 2, "h": 3, "i": 1})
  })

  test("ignore letter casing", async () => {
    const totalFrequency = await freq(["m", "M"])

    expect(totalFrequency).toMatchObject({"m": 2})
  })

  test("ignore whitespace", async () => {
    const totalFrequency = await freq(["   ", "\t", "\r\n"])

    expect(totalFrequency).toMatchObject({})
  })

  test("ignore punctuation", async () => {
    const totalFrequency = await freq(["!", "?", ";", ",", "."])

    expect(totalFrequency).toMatchObject({})
  })

  test("ignore numbers", async () => {
    const totalFrequency = await freq(["1", "2", "3", "4", "5", "6", "7", "8", "9"])

    expect(totalFrequency).toMatchObject({})
  })

  test("Unicode letters", async () => {
    const totalFrequency = await freq(["本", "φ", "ほ", "ø"])

    expect(totalFrequency).toMatchObject({"本": 1, "φ": 1, "ほ": 1, "ø": 1})
  })

  test("combination of lower- and uppercase letters, punctuation and white space", async () => {
    const totalFrequency = await freq(tolkien)

    expect(totalFrequency).toMatchObject({
      "a": 32,
      "b": 4,
      "c": 6,
      "d": 14,
      "e": 37,
      "f": 7,
      "g": 8,
      "h": 29,
      "i": 19,
      "k": 6,
      "l": 12,
      "m": 7,
      "n": 19,
      "o": 22,
      "p": 7,
      "r": 17,
      "s": 16,
      "t": 30,
      "u": 9,
      "v": 2,
      "w": 9,
      "y": 4
    })
  })

  test("many small texts", async () => {
    const totalFrequency = await freq(Array(50).fill("abbccc", 0))

    expect(totalFrequency).toMatchObject({"a": 50, "b": 100, "c": 150})
  })
})
