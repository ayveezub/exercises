String.prototype.isUpperCase = function() {
  let str = this.toString()
  
  return str === str.toUpperCase()
}
