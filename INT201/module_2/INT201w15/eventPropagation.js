//1.select html obj. 
const outer = document.getElementById('outer-div')
const inner = document.getElementById('inner-div')

const submitButton = document.querySelector('button')

//2.select even type 'click'
//3. register type to html obj.

outer.addEventListener('click',(e)=>{
    console.log('--------------------')
    console.log('outer div clicked')
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
})

inner.addEventListener('click',(e)=>{
    console.log('--------------------')
    console.log('inner div clicked')
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
})

submitButton.addEventListener('click',(e)=>{
    console.log('--------------------')
    console.log('submitButton clicked')
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
})