function sumBetweenOneAndN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
    console.log(`i = ${i}, sum = ${sum}`);
  }

  return sum;
}

const finalSum = sumBetweenOneAndN(5);
console.log("Final Sum:", finalSum);