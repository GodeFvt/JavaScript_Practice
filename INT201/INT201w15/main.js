const submitButtom = document.getElementById('submit-btn-01')

submitButtom.addEventListener('click',(e)=>{
    e.preventDefault()
    const input = Array.from(document.querySelectorAll('input')) 
    const p = document.querySelector('p')
    const username = input[0].value;
    const password = input[1].value;
    console.log(username);
    console.log(password);
    if(username.length === 0|| password.length ===0){
        p.textContent = 'error'
        console.log('error');
    }else{
        p.textContent = 'complete'
    }
    console.log('submit clicked');
})