function solution(str, ending) {
  // TODO: complete
  if (ending === '') return true

  let endingArray = Array.from(ending)
  let ending3chars = endingArray.slice(-endingArray.length).toString()

  let strArray = Array.from(str)
  let str3chars = strArray.slice(-endingArray.length).toString()

  if (ending3chars === str3chars) {
    return true
  }
  return false
}

console.log(solution('abc', ''), true)
console.log(solution('banana', 'banana'), true)
console.log(solution('abc', 'bcd'), false)





//Best Solution of Code Wars
function solution(str, ending) {
  return str.endsWith(ending);
}