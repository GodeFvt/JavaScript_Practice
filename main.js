// function greeting(someone){
//     return 'hello '+ someone;
// }

// let $myName = 'Phuttinan Phaksaweang' 
// $myName = 10 //weakly and dynamic data stype
// // iasynchronous programming
// console.log('Strating....')
// setTimeout(()=> {
//     console.log('more complex task...')
// },10000)
// console.log(greeting($myName))
// setTimeout(()=> {
//     console.log('simple complex task...')
// },2000)
// console.log('Good Bye....')

// let msg = "I'm a studen"

let a
console.log(a)
let total
console.log(total)
if(total === undefined) console.log('variable does not have intial value')
if(a === null) console.log('variable has null value')
// backtick
if('2'== 2) console.log(`'2' == 2': ${'2'== 2}`)
if('2'=== 2) console.log(`'2' == 2': ${'2'=== 2}`)

//object sample 
const obj = {id: 1001 ,name:'pen',price:100}
const obj2 = {id: 2001 }
// obj = obj2 //obj cannot change referrence value
obj.id = 999 //but can update its properties
