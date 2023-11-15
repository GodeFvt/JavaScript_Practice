const body = document.body
const bodyChildNodes = body.childNodes //NodeList:array-like (implement for-each, cannot array methods), return children with all node types
const bodyChildren = body.children //HTMLCollection:array-like (not implement for-each, cannot array methods), return children with only element type

console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)

bodyChildNodes.forEach((bcn) => {
  console.log(bcn)
})
Array.from(bodyChildren).forEach((bc) => {
  console.log(bc)
})
//query/select element by id
console.log(document.documentElement ===  document.firstElementChild)//html , root element
console.log(document.documentElement === document) //root node

const course201Ele = document.getElementById('int201')
console.log(course201Ele);

const course101Ele = document.querySelector('#int101')
console.log(course101Ele);

const bscitCourses = document.querySelector('#int101,#bscit-courses')
console.log(bscitCourses);
//by class
const progCourses = document.querySelector('.programming')
console.log(progCourses);

//select/query a collection of elements
//find with css selector
const progEle = document.querySelectorAll('#int201, .programming')
console.log(progEle) //NodeList
const liEle1 = document.querySelectorAll('li')
console.log(liEle1) //Nodelist
//find with tag name
const liEle2 = document.getElementsByTagName('li')
console.log(liEle2) //HTMLCollection
//find with classname
const coursesEle = document.getElementsByClassName('courses')
console.log(coursesEle)