//1.create function with function declaration
function concat(str1, str2) {
    return str1 + str2
}
//2. create function with function expression
const toUpper = function (str1) {  
    return str1.toUpperCase()
}
//3. create function with named function expression
const reverse = function rev(str1) {  
    return [...str1].reverse().join('')
}
console.log(concat('js', 'beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))
//doSomething is a higher order function because it accept op function as its parameter but not return function as a result
const doSomething = function (str1, op) {  
    //op=toUpper , op=reverse  
    return op(str1)
}
console.log(doSomething('Hey', toUpper))
console.log(doSomething('Hey', reverse))
//doIt is a higher order function because it return a function as a result
const doIt = function () {  
    return concat //!== return concat('1', '2')
}
const x = doIt()
console.log(typeof x) //function
console.log(x('1', 'first')) //1   first