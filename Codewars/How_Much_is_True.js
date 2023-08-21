function countTrue(arr) {
    if(arr.length == 0){
        return 0
    }else{
        return arr.filter( bo == true).length
    }
}

console.log(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]))