function fizzBuzz(max) {
  let result = '' ;
  for(let i = 1 ; i <= max ; i ++ ){
    result += i % 3 == 0  && i % 5== 0  ? 'FizzBuzz' : i % 3 == 0 ? 'Fizz' : i % 5 == 0 ? 'Buzz' : i ;    
  }
  return result ;
}
console.log(fizzBuzz(10))
module.exports = fizzBuzz
