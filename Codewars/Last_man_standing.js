function lastManStanding(n) {
  let arr = Array.from({ length: n }).map((_, idx) => idx + 1);
  let count = 0;
  while (arr.length > 1) {
    if (count % 2 === 0) {
      for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1);
      }
    } else {
      for (let i = arr.length - 1; i >= 0; i = i - 2) {
        arr.splice(i, 1);
      }
    }
    count++;
  }
  return arr[0];
}

//Test
console.log(lastManStanding(9));
console.log(lastManStanding(10));
console.log(lastManStanding(100));
console.log(lastManStanding(1000));
