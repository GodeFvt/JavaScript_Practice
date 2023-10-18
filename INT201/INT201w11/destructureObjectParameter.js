const student = { id: 645000101, name: 'Somchai Jaidee' }
const { id: studentId } = student
let { name: studentName } = student
console.log(studentId)
console.log(studentName)
studentName = 'John'
console.log(studentName) //John
console.log(student.name) //Somchai Jaidee
function doSomething({ id: studentId }) { //const { id: studentId } = student
  return studentId
}
console.log(doSomething(student)) //645000101