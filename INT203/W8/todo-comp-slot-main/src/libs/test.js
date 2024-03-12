async function doSomething(done) {
    console.log('working...');
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>(done ? resolve('success') : reject('failure')),5000)
    })
}

async function thenDo(){
    doSomething(true)
    .then((status)=>{
        console.log(status);
    })
    .catch((error)=>{
        console.log(error);
    })
}


async function waitDoSomething(result){
    try{
        const status =await doSomething(result)
        console.log(status);
    }catch(error){
        console.log(error);
    }
}

thenDo()

waitDoSomething(true)