//reverse original array
const nums = [-5, -6, 7, 77, 8, 9, -1, 0]
console.log('before', nums)
nums.reverse()
console.log('after', nums) //[  0, -1,  9, 8,  7, -6, -5]
 
const numString = nums.join('*')
console.log(numString)
console.log(nums.sort()) //[  -1, -5, -6, 0,  7, 77,  8, 9] default sorting by string
nums.sort((num1, num2) => num1 - num2) //[-6, -5, -1,  0, 7,  8,  9, 77] ascending number sorting
console.log(nums)
nums.sort((num1, num2) => num2 - num1) //[ 77,  9,  8,  7, 0, -1, -5, -6 ]descending number sorting
console.log(nums)