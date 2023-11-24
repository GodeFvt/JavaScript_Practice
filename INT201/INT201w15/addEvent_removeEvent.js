//1.select html obj. 
const outer = document.getElementById('outer-div')
const inner = document.getElementById('inner-div')

const submitButton = document.querySelector('button')

//2.select even type 'click'
//3. register type to html obj.

function doSomething(){
    console.log('do something');
}

submitButton.addEventListener('click',()=>{
    console.log('buttom click');
})

submitButton.addEventListener('click',doSomething)

submitButton.removeEventListener('click',doSomething)