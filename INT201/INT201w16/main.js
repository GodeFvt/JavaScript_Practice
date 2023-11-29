import {CookieUtil} from './lib/cookieUtil.js'


// const Mycookie = document.cookie
// console.log(Mycookie);

// document.cookie = 'course=INT201;expires=max-age=10'

// console.log(Mycookie);

// CookieUtil.set('course','INT201',new Date(2023,11,31))
// CookieUtil.set('credit','2',new Date(2024,0,31))

// console.log(CookieUtil.get('course'));
// console.log(CookieUtil.get('credit'));

// CookieUtil.unset('credit');

const submitButtom = document.getElementById('submit-btn-01')
const body = document.querySelector('body')
const color1 = document.getElementById('check1')
const color2 = document.getElementById('check2')
if(color2.checked === false ||  color1.checked === false){ 
    body.style = "background-color:" + CookieUtil.get('color')
}
submitButtom.addEventListener('click',(e)=>{
    e.preventDefault()
    if(color1.checked === true ){
        CookieUtil.set('color',color1.value,new Date(2023,11,31))
        body.style="background-color:" + color1.value
    }
    if(color2.checked === true ){
        CookieUtil.set('color',color2.value,new Date(2023,11,31))
        body.style="background-color:" + color2.value
    }
    console.log(color1);
    console.log(color2);
})