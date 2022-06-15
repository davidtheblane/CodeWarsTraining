function getMiddle (s) {
  const wordLength = s.length
  if (wordLength % 2 === 0) {
    console.log('evenNumber')
    const result = `${s.charAt((wordLength / 2) - 1)}${s.charAt(wordLength / 2)}`
    console.log(result)
    return result
  } else {
    const result = s.charAt(Math.round(wordLength / 2) - 1)
    console.log('oddNumber')
    console.log(result)
    return result
  }
}

getMiddle('A')

// function getMiddle (s) {
//   const wordLength = s.length
//   if (wordLength % 2 === 0) return `${s.charAt((wordLength / 2) - 1)}${s.charAt(wordLength / 2)}`
//   if (wordLength % 2 === 1) return s.charAt(Math.round(wordLength / 2) - 1)
// }
