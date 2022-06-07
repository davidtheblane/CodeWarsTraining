function getDivisorsCnt (n) {
  const result = []
  for (let i = 0; i <= n; i++) {
    const isDivisor = n % i === 0
    if (!isDivisor) continue
    result.push(i)
  }
  return result.length
}

getDivisorsCnt(6)
