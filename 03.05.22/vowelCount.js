function getCount(str) {
  let vowelsCount = 0;
  let strArray = str.split('')
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i <= strArray.length; i++) {

    if (vowels.includes(strArray[i])) {
      vowelsCount++
    }
  }
  return vowelsCount;
}
console.log(getCount('abracadabra'))




//Best Solution of Code Wars
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsCount = 0;

  // enter your majic here
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }

  return vowelsCount;
}