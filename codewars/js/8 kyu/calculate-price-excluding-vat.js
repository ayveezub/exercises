function excludingVatPrice(priceWithVat) {
  if (priceWithVat === null) return -1
  
  let originalPrice = priceWithVat / 1.15
  
  return parseFloat(originalPrice.toFixed(2))
}
