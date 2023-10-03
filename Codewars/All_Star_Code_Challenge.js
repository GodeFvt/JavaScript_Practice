function rotate(str){
    const result =[]
    for(let i = 0 ; i < str.length ; i++){
        const arr = str.split("");
        const firstElement = arr.shift();
        const newStr = arr.join("");
        str = newStr + firstElement
        result.push(str);   
        
    }
    return result
}

console.log(rotate("Hello"));