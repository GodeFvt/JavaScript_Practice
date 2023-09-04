function moveZeros(arr) {
  return [...arr.filter((x) => x !== 0), ...arr.filter((x) => x === 0)];
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
