const students = [
    { id: 1 , fname: 'got' , lname: 'gi'},
    { id: 2 , fname: 'got2' , lname: 'gi1'},
    { id: 3 , fname: 'got3' , lname: 'gi'}
]

const fl = students.map(el => `${el.lname} ${el.fname}`)
console.log(fl);

const fl2 = students.map(el => `${new Date(Date.now()).getFullYear()}${el.id}`)
console.log(fl2);

const fl3 = students.find( el => el.lname.toLowerCase().startsWith('gi'))
console.log(fl3.id);