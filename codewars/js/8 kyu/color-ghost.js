class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"]
    const randomInd = Math.floor(Math.random() * colors.length)
    
    this.color = colors[randomInd]
  }
}
