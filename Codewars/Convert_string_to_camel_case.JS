function toCamelCase(str){
    let arr = str.split(/[-_]/);
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return result
}


console.log(toCamelCase("the_stealth_warrior")) 
console.log(toCamelCase("The-Stealth-Warrior")) 
console.log(toCamelCase("A-B-C")) 