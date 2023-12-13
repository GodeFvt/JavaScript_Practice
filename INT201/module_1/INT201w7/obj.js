//1. crate object by literal {}
const student = { id: 641000501, firstname: 'Somchai', lastname: 'Jaidee' }
console.log(student)
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(typeof student)
console.log(Object.prototype.isPrototypeOf(student))
console.log(Date.prototype.isPrototypeOf(student))

const lecturer = { id: 1001, firstname: 'Umaporn', lastname: 'Sup' }
console.log(Object.prototype.isPrototypeOf(lecturer))

//way to get property value
const someoneId = student.id //object.key
const someoneFirstName = student['firstname'] //object["key"]
console.log(someoneId)
console.log(someoneFirstName)

//way to assign/set property value
student.id = 651000101
student['firstname'] = 'John'
console.log(student.id)
console.log(student['firstname'])

//dynamic properties
//add new property
student['email'] = 'somchai@sit.kmutt.ac.th'
student.address = 'Bangkok, Thailand'
console.log(student)
//delete existing property
delete student.address
console.log(student)

//nested object
student.advisor = lecturer
console.log(student)

//2. create object with constructor function
function Person(id, firstname, lastname) {
    this.id = id
    this.fullname = `${firstname} ${lastname}`
  }
  const p1 = new Person(111, 'Mary', 'Jo')
  const p2 = new Person(222, 'Adam', 'Smith')
  const p3 = new Person(333, 'Susan', 'Dee')
  console.log(p1)
  console.log(p2)
  console.log(p3)
  console.log(Object.prototype.isPrototypeOf(p1))
  console.log(Object.prototype.isPrototypeOf(p2))
  console.log(Object.prototype.isPrototypeOf(p3))
  console.log(Person.prototype.isPrototypeOf(p3))
  console.log(Date.prototype.isPrototypeOf(p3))

  //3.create object with Class
class Student {
    constructor(id, fn, ln) {
      this.id = id
      this.firstname = fn
      this.lastname = ln
    }
    getFullname() {
      return `${this.firstname} ${this.lastname} `
    }
  }
  //st1 object->Student prototype->Object prototype (Ancestor)
  const st1 = new Student(1, 'Pitch', 'Jo')
  const st2 = new Student(2, 'Lee', 'Smith')
  console.log(st1)
  console.log(st2)
  console.log(st1.getFullname())
  console.log(st2.getFullname())
  console.log(Object.prototype.isPrototypeOf(st1)) //true
  console.log(Student.prototype.isPrototypeOf(st1)) //true
  
  //4. create object by using Object.create()
  //undergratSt1 object->Student prototype->Object prototype (Ancestor)
  const undergratSt1 = Object.create(st1)
  console.log(undergratSt1)
  console.log(undergratSt1.id)
  console.log(undergratSt1.firstname)
  console.log(undergratSt1.lastname)
  console.log(Object.prototype.isPrototypeOf(undergratSt1))
  console.log(Student.prototype.isPrototypeOf(undergratSt1))
  undergratSt1.project = 'Web Application'
  console.log(undergratSt1)