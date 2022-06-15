function last(x) {
  x = x.split(' ')
  let newArray = []
  const final = []
  for (let i = 0; i < x.length; i++) {
    newArray.push(x[i].split('').reverse().join(''))
  }

  newArray = newArray.sort()

  for (let i = 0; i < newArray.length; i++) {
    final.push(newArray[i].split('').reverse().join(''))
  }
  //não concluido
  return final
}
last('what time are we climbing up the volcano')


//expect to be
//'time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'