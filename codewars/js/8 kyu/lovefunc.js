const lovefunc = (flower1, flower2) => {
  const isPetals1Even = flower1 % 2 === 0
  const isPetals2Even = flower2 % 2 === 0
  
  return (isPetals1Even && !isPetals2Even) || (!isPetals1Even && isPetals2Even)
}
