
// let m 
// console.log(m?.[0]) // ทำงานต่อได้ ถ้าเป็น null หรือ undefined 

let m = null
let n = m ?? 0 //เหมือนกับ  let n = n === null || n === undefined ? m : 0 
// ถ้าฝั่งซ้ายเป็น null หรือ undefined ให้คค่าฝั่งขวา ถ้ามีค่า ก็ให้ค่าฝั่งซ้าย 
console.log(n)

let y = []
let z = {}
console.log(y) //empty array  ไม่ใช่ undefined เเละ null
console.log(z) //empty object ไม่ใช่ undefined เเละ null

let a 
a = a ?? y
console.log(a)

// Math.floor() ไม่สนเศษ
// Math.ceil() ปัดขึ้นหมด
// Math.round() ปัดลงหมด
// Math.PI
// Math.pow(2,5) ยกกำลัง
// Math.sqrt(9)
// Math.random()

function random(min,max){
    let range = max - min + 1
    return Math.floor((Math.random() * range) + min)
}
let h = random(25,100)
console.log(h)

// let array = [5,1,1,5]
// let array2 = []
// array.forEach(aaa => array2.push(aaa * 2))
// console.log(array2)

let str1 = 'ant'
let str2 = 'Ant'
let str3 = 'ANT'
let str4 = 'ant'
console.log(str1 === str2) //false 'a' === 'A',
console.log(str1 !== str3) //true 'a' ==='A',
console.log(str2 === str3) //false 'A' === 'A', 'n' ==='N'
console.log(str1 === str4) //true 'a' === 'a', 'n'==='n', 't' === 't'
console.log(str1 < str2) //false 'a'< 'A' 97<65
console.log(str3 < str1) //true 'A'< 'a' 65<97
console.log('----')
console.log(str1.includes('nt')) //true
console.log(str1.includes('Nt')) //false
console.log(str1.toLowerCase().includes('Nt'.toLowerCase())) //true
console.log(str1.toUpperCase().includes('Nt'.toUpperCase())) //true
console.log(str1.includes('ant'))


let x1 = [1,3,true,'undefined']
let y1 = [1,3,true,'undefined']
let z1 =x1 // give memory address from x to z
console.log(x1===y1) // false memory address of x ===   memory address of y
console.log(x1===z1) // true memory address of x ===   memory address of z


//for of
let x2 = [1,3,true,'undefined']
for (const data of x2){
    console.log(data)
}

x2.forEach( element => console.log(element) )

let obj ={id: 1 ,title :'got'}
//for in
for(const key in obj ){
    console.log(key)
    console.log(obj[key])
}
