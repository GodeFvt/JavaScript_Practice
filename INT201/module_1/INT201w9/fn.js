const names = ['alice','John','Bob','Ann']
//all
const isStartWithALetter =  names.every((a) => a.toLowerCase().startsWith('a'))

console.log(isStartWithALetter);

//at least one name
const isStartWithALetter2 =  names.some((a) => a.toLowerCase().startsWith('a'))
console.log(isStartWithALetter2);

