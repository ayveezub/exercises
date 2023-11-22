const findDifference = (a, b) => Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
