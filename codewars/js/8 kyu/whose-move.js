function whoseMove(lastPlayer, win) {
  if (win) return lastPlayer
  if (!win) return lastPlayer === "black" ? "white" : "black"
}
