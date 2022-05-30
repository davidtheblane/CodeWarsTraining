function arithmetic(a, b, operator) {
  const option = operator;

  switch (option) {
    case 'add':
      return a + b;

    case 'subtract':
      return a - b;

    case 'multiply':
      return a * b;

    case 'divide':
      return a / b;

    default:
      return "passe uma opção"
  }
}

console.log(arithmetic(2, 5, "multiply"))