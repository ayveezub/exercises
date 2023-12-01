const flickSwitch = arr => {
  let toggle = true
  
  return arr.map(item => {
    if (item === 'flick') { toggle = !toggle }
    
    return toggle
  })
}
