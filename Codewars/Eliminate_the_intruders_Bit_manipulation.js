function eliminateUnsetBits(number) {
    const filteredNumber = number.split('').filter(bit => bit === '1').join('');
    if (filteredNumber === '') {
        return 0;
    }
    return parseInt(filteredNumber, 2)
  }

//Test
console.log(eliminateUnsetBits("11010101010101")) 
console.log(eliminateUnsetBits("111")) 
console.log(eliminateUnsetBits("1000000")) 
console.log(eliminateUnsetBits("000")) 
