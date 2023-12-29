const eachCons = (array, n) => {
  return array.reduce((acc, _, i) => {
    let temp = array.slice(i, i + n)
    
    if (temp.length === n) acc.push(temp)
    
    return acc
  }, [])
}
