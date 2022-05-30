function minMax(numbers) {
  let a = Math.min(...numbers)
  let b = Math.max(...numbers)
  return [a, b]
}

console.log(minMax([1, 2, 3, 4, 5]))



// Best solution of Code Wars
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}