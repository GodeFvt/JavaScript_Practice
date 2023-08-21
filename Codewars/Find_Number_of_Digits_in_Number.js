//ไม่ใช้ toString
function num_of_digits(num) {
	if (num === 0) {
    return 1;
  }
  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

//Test 
console.log(num_of_digits(13124))
console.log(num_of_digits(-12381428))
console.log(num_of_digits(1000000000))
console.log(num_of_digits(-2147483647))