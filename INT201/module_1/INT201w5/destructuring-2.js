const x = [...'Hello World']
console.log(x)
// [
//   'H', 'e', 'l', 'l',
//   'o', ' ', 'W', 'o',
//   'r', 'l', 'd'
// ]
//destructuring array result [index, element] from entries()
for (const [index, value] of x.entries()) { 
    console.log(index)  
    console.log(value)
}