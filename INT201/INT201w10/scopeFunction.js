let a = 1
let b = 10
function doSomething() {
  let b = 5
  let result = a + b
  console.log(result) //6
  function doIt() {
    let c = 100
    console.log(c) //100
    result += c //106   //doIt is a closure function
    console.log(result)
  }
  return doIt //return doIt function
}
const fn = doSomething()
console.log(typeof fn) //function
fn() //100, 106
// console.log('result', result)
// console.log('c', c)
console.log('a', a)
console.log('b', b)