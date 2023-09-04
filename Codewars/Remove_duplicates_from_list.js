function distinct(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (arr.indexOf(a[i]) === -1) {
      arr.push(a[i]);
    }
  }
  return arr;
}

//Test
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));
console.log(distinct([1, 1, 2, 1, 1, 2]));
