//initial x with empty array
const x = [] 
console.log(typeof x)

if(x?.length === 0 )console.log('empty array')
else console.log('not empty array')

console.log(x[0])

//x[index]
x[0] = 1
x[1] = 3
x[2] = 5
//add a new element in the end of array by using push function
x.push(7)
x.push(9)
console.log(x);
// [ 1, 3, 5, 7, 9 ]

const y = [1, true, 'beginner', 2.5] //untypes, mixed type
console.log(y)
console.log(y[0]) //1
console.log(y[y.length - 1]) //2.5
console.log(y.length) //4

//nested array 
const z = [
    [2,4,6],
    [true,false],
    ['a','b','c'],
]

const m = [
    {productId: 1,name: 'pen',price: 200},
    {productId: 2,name: 'notebook',price: 100}
]
console.log(m.length) //3
console.log(m[0]) // { productId: 1, name: 'pen', price: 200 }
console.log(m[m.length - 1]) //{ productId: 3, name: 'pencil', price: 10 }
const n = { productId: [1001, 1002, 1003], productPrice: [100, 10, 15] } //object
console.log(n.productId) //[1001, 1002, 1003]
console.log(n.productId[0]) //[1001]