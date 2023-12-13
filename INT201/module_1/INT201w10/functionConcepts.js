const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
function doSomething1(num1, num2, op) {
  return op(num1, num2)
}
function doSomething2(op) {
  return op
}
const result1 = doSomething1(10, 5, add) //15
console.log('result1', result1)
const result2 = doSomething2(add) //add function
console.log(typeof result2) //function
console.log('result2', result2)
const result3 = doSomething2(subtract) //subtract function
console.log(typeof result3) //function
console.log('result3', result3)
const result4 = doSomething2(1) //1
console.log(typeof result4) //Number
console.log('result4', result4)
const result5 = doSomething2('add') //'add'
console.log(typeof result5) //String
console.log('result5', result5)