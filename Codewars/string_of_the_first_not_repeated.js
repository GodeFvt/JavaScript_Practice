function noRepeat(str) {  
    let arr = str.split("");
    for(let i = 0 ; i < arr.length ; i++){
        if(arr.filter((element) => element === arr[i]).length === 1){
            return arr[i]
        }
    }
}
console.log(noRepeat("abbbc")) 

// function noRepeat(str) {  
//     for(var i of str) if(str.split(i).length == 2) return i
//   }

// function noRepeat(str) {  
//     return [...str].find((char, i, arr) =>
//       arr.indexOf(char) === arr.lastIndexOf(char)
//     );
//   }