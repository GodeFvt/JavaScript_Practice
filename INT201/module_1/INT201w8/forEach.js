let sum = 0
let arr = [1,2,3,4,5,6]
arr.forEach(element => sum += element)
console.log(sum)

//forEach
const fruits = ['apple', 'mango', 'orange', 'pineapple']
fruits.forEach((fruit) => console.log(fruit.charAt(0)))
let allFruits = ''
fruits.forEach((fruit) => (allFruits += fruit + ' '))
console.log(allFruits)