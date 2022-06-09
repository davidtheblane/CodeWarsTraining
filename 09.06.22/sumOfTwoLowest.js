function sumTwoSmallestNumbers (numbers) {
  const numbersArray = numbers.sort((a, b) => a - b)
  const sum = numbersArray[0] + numbersArray[1]
  return sum
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])
