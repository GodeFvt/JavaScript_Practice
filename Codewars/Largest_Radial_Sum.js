function largestRadialSum(arr, d) {
  let max = 0;
  for (let i = 0; i < arr.length / d; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j += arr.length / d) {
      sum += arr[j];
    }
    if(sum > max) max = sum
  }
  return max;
}

console.log(largestRadialSum([1, 2, 3, 4], 2));
console.log(largestRadialSum([1, 5, 6, 3, 4, 2], 3));
console.log(largestRadialSum([-2,-1,-2,-2], 2));
