function generateMultiplicationTable(n) {
  console.log("Multiplication Table of " + n + ":");

  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + " * " + i + " = " + result);
  }
}

generateMultiplicationTable(5);
