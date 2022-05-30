function accum (s) {
  const mumArray = s.split('')

  const wordRepetition = []
  for (let i = 0; i < mumArray.length; i++) {
    const repeated = mumArray[i].toUpperCase()
    wordRepetition.push(repeated + String(mumArray[i].repeat(i).toLowerCase()))
  }
  return wordRepetition.join('-')
}

accum('abcd')
