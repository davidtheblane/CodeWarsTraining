function dontGiveMeFive (start, end) {
  const count = []
  for (let i = start; i <= end; i++) {
    if (String(i).includes('5')) continue
    count.push(Number(i))
  }
  return count.length
}

dontGiveMeFive(4, 17)
