function squareDigits (num) {
  const numbersArray = String(num).split('')
  const squares = []

  for (const number of numbersArray) {
    squares.push(Math.pow(Number(number), 2))
  }
  return Number(squares.join(''))
}

squareDigits(3212)
