//destructuring array
//create array named nums
const nums = [1, 3, 5, 7, 9]
//destructuring, not skip so index starting at 0
const [a, b, c] = nums 
//a=1, b=3, c=5
console.log(a)
console.log(b)
console.log(c)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

const [x] = nums
console.log(x)
//destructuring with skip some indexes and use rest to the last desturcturing variable z
const [, , , y, , ...z] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(y) //20
console.log(z) //[30,35,40,45,50]

const [...m] = nums
console.log(m) //[1, 3, 5, 7, 9]

//const nums = [1, 3, 5, 7, 9]
const n = nums //memory address of nums to nn[0] = 999
console.log(nums)
console.log(n)//all below are destructuring
const [o] = nums //999
const [, p] = nums //3
const [...q] = nums //[ 999, 3, 5, 7, 9 ]
console.log(o)
console.log(p)
console.log(q)