const HQ9 = code => {
  switch(code) {
    case 'H':
      return 'Hello World!'
    case 'Q':
      return 'Q'
    case '9':
      let song = ''
      for(let i = 99; i > 2; i--){
        song += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
      }
      song += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
      song += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
      song += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
      
      return song
    default:
      return undefined
  }
}
