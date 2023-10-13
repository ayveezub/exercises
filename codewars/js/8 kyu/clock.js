const past = (h, m, s) => {
  const hoursInMs = h * 3600 * 1000
  const minutesInMs = m * 60 * 1000
  const secondsInMs = s * 1000
  
  return hoursInMs + minutesInMs + secondsInMs
}
