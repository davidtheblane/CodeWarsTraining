function descendingOrder (n) {
  const stringNum = String(n).split('').sort().reverse().join('')
  return Number(stringNum)
}
descendingOrder(1021)
