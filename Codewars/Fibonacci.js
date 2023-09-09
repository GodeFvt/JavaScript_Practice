function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));

function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  let num1 = 1;
  let num2 = 1;
  let sum;
  for (let i = 2; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
console.log("Fibonacci(5): " + fibonacci(50));
console.log("Fibonacci(8): " + fibonacci(8));
