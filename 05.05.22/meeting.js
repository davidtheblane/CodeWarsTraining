// s = "Fred:Corwil;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
s = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn",
  "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"

function meeting(s) {
  const removeColon = /:/g
  const removeSemicolon = /;/g
  const reverseStrings = /(\w+)\s(\w+)/g
  const removeCommas = /,/g
  const removeSpaces = / /g
  let clearText = s.replace(removeColon, ' ').replace(removeSemicolon, ', ')
  let clearTextArray = clearText.split(', ')

  let lastNameFirstName = []
  clearTextArray.forEach(name => {
    lastNameFirstName.push(name.replace(reverseStrings, '($2, $1)').toUpperCase())
  });

  const namesInAlphabeticalOrder = lastNameFirstName.sort().toString().replace(removeCommas, '').replace(removeSpaces, ', ')
  // console.log(namesInAlphabeticalOrder)
  return namesInAlphabeticalOrder
}

meeting(s)

//Best Code Wars Solution

function meeting(s) {
  let string = s.toUpperCase().split(';')
    .map(x => x.split(':').reverse().join(', '))
    .sort()
    .join(')(')
  return '(' + string + ')'
}