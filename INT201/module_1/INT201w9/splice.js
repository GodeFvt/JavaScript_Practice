const nums = [10, 3, 75, 1, 30, 100]
 
//1. splice to remove 75, 1, 30
//return array of deleted elements
//splice( startIndex,the number of delete elements)
const removeEles = nums.splice(2, 3)
console.log(removeEles) //[ 75, 1, 30 ]
console.log(nums) //[ 10, 3, 100 ]
 
//2. splice to add three new elements at index 3, return empty array
const addEles = nums.splice(2, 0, 111, 555, 888)
console.log(addEles) //[]
console.log(nums) //10, 3, 111, 555, 888, 100 ]
 
//3. splice to replace at index 1 with [200, 400]
const replaceEles = nums.splice(1, 2, 200, 400)
console.log(replaceEles) //[ 3, 111 ]
console.log(nums) //[ 10, 200, 400, 555, 888, 100 ]