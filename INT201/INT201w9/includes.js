
    //includes for string
const msg = 'Today is a present'
console.log(msg.includes('Re')) //false
console.log(msg.includes('re')) //true
console.log(msg.includes('day')) // true
console.log(msg.includes('present')) //true
const newMsg = msg.split(' ')
console.log(newMsg) //[ 'Today', 'is', 'a', 'present' ]
//includes for array
console.log(newMsg.includes('re')) //false
console.log(newMsg.includes('day')) //false
console.log(newMsg.includes('today')) //false
console.log(newMsg.includes('Today')) //true
