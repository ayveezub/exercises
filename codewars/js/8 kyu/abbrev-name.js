const abbrevName = name => {
  const nameArray = name.split(' ')
  
  return nameArray[0][0].toUpperCase() + '.' + nameArray[1][0].toUpperCase()
}
