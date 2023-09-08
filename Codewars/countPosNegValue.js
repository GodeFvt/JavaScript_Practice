function countPosNegValue(arr) {
  const objPosNeg = { positive: 0, negative: 0 };
  if (arr === null || arr === undefined) return undefined;
  if (arr.length === 0) return {};
  objPosNeg.positive = arr.filter((num) => num > 0).length;
  objPosNeg.negative = arr.filter((num) => num < 0).length;
  return objPosNeg;
}

console.log(countPosNegValue());
console.log(countPosNegValue([]));
console.log(countPosNegValue([-1, 2, 3, -5, -5]));
console.log(countPosNegValue([0, 0, 0, 0, 0]));

function countPosNegValue2(arr) {
  const objPosNeg = { positive: 0, negative: 0 };
  if (arr === null || arr === undefined) return undefined;
  if (arr.length === 0) return {};
  for (const element of arr) {
    if (element > 0) {
      objPosNeg.positive++;
    } else if (element < 0) {
      objPosNeg.negative++;
    }
  }
  return objPosNeg;
}
console.log(countPosNegValue2());
console.log(countPosNegValue2([]));
console.log(countPosNegValue2([-1, 2, 3, -5, -5]));
console.log(countPosNegValue2([0, 0, 0, 0, 0]));