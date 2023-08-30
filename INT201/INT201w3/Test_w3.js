const num = 1
console.log(typeof num)
if(typeof num === 'boolean') console.log('num is a boolean type')

// let a = 1n
// console.log(typeof a)

// let b = 3.2
// console.log(typeof b)

// let c = `A-${b/2 +1}`
// console.log(typeof c)


// implicit type conversion (steing to boolean)
if('1')console.log('1 is boolean true')
else console.log('1 is not a boolean')

if(0) console.log('value is zero')
else console.log('value is not zero')

if(2) console.log('value is two')
else console.log('value is not two')

//
//sample array data type []
const nums =[1,3,5,7]
console.log(typeof nums)
//sample object data type : collection of properties{}
const obj ={id :1 , price :100}
console.log(typeof obj)


function doSomething(activity){
    if(activity === null || activity === undefined){
        return 'not activity'
    }
    return `${activity} is done`
}
console.log(doSomething('awd'))

//a, b, c, e are global scope
let a = 1
const b = 2
var c = 3
//d, e are block scope
{  
let d = 4  
const e = 5  
var f = 6  
console.log('block area')  
console.log(a)  
console.log(b)  
console.log(c)
}
//h, i, j are function scope
function doIt() {  
    let h = 7  
    const i = 8  
    var j = 9  
    console.log('function area')  
    console.log(a)  
    console.log(b)  
    console.log(c)
}
    doIt()
    console.log('global area')
    console.log(a)
    console.log(b)
    console.log(c)


let msg ='hello'
console.log(msg.charAt(0))
msg =[...msg]
console.log(msg)

let n = '2'
console.log(typeof n)
console.log(typeof Number(n)) //explict type conversion

//optional chaining
let aaa // undefined
//with aaray
console.log(aaa?.[0])

//with object
let obj2 
console.log(obj2?.id)