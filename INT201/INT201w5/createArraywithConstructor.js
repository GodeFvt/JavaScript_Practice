//3. create array with constructor
const x = new Array() //create empty array, no parameter
console.log(x) //x=[]
console.log(x.length) //x.length=0
const y = new Array(5) // 5 is length of array
console.log(y.length) //5
console.log(y[0]) //undefined
const z = new Array(10, 'A')
console.log(z.length) //2
console.log(z[0]) //10
console.log(z[z.length - 1]) //'A'