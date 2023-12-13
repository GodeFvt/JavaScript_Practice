//primitive parameter passing
const x = function (a) {  
    //a=b , a=1  
    a = 2
}
let b = 1
x(b)
console.log(b) //b does not change after calling x()
//object parameter passing
const y = function (m) {  
    //m=std ,m= memory add of std  
    m.id = 555
}
const std = { id: 64500101, name: 'Somchai' }
y(std)
console.log(std.id) //std will change as function makes change of m