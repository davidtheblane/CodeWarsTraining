function highAndLow (numbers) {
  const numbersArray = numbers.split(' ')
  const min = Math.min(...numbersArray)
  const max = Math.max(...numbersArray)

  return `${max} ${min}`
}

highAndLow('1 2 3 4 5')
