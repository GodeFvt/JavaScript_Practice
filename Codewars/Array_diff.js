function arrayDiff(a, b) {
  let result = a;
  for (let i = 0; i < b.length; i++) {
    let fil = result.filter((el) => el !== b[i]);
    result = fil !== undefined ? fil : result;
  }
  return result;
}

function arrayDiff2(a, b) {
  return a.filter((x) => !b.includes(x));
}

console.log(arrayDiff([1, 2, 2], [1]));

console.log(arrayDiff2([1, 2, 2], [1, 2]));
