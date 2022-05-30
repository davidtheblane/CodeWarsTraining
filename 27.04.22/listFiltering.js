function filter_list(l) {
  const newArray = [];

  l.forEach(item => {
    if (typeof item === "number") {
      newArray.push(item)
    }
  });
  return newArray
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))
