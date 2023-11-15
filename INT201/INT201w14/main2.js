const firstDiv = document.body.firstElementChild
console.log(firstDiv)
const firstDivAttributes = firstDiv.attributes //get all attribute of any element
console.log(firstDivAttributes) //length=2, id and class attributes
Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(firstDiv.getAttribute('id')) //return value of specified attribute 'id'
console.log(firstDiv.getAttribute('class'))
//return value of specified attribute 'name'
const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)
//create a new attribute named 'owner' with value 'Umaporn
firstDiv.setAttribute('owner', 'Umaporn')
//creat a new <p> under div.courses
const newPEle = document.createElement('p') //<p></p>
// newPEle.textContent = '<span style="color:red">Client Web Programming II</span>' //<p>Client Web Programming II</p>
// newPEle.innerHTML = '<span style="color:red">Client Web Programming  II</span>'
newPEle.innerText = '<span style="display:none">Client</span>Web Programming II'
newPEle.setAttribute('id', 'int203') //<p id="int203"></p>
newPEle.setAttribute('class', 'courses') //<p id="int203" class="courses"></p>
const divCoursesParent = document.getElementById('bscit-courses')
// divCoursesParent.appendChild(newPEle)
const refNode = divCoursesParent.lastElementChild
// divCoursesParent.insertBefore(newPEle, refNode)
divCoursesParent.replaceChild(newPEle, refNode) //replace int201 with int203
divCoursesParent.removeChild(newPEle)