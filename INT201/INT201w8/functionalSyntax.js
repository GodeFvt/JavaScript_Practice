//function declaration
function sum(n1, n2) {
    return n1 + n2
  }
  //arrow function with one statement
  const sum1 = (n1, n2) => n1 + n2
  //arrow function with one statement
  const sum2 = (n1, n2) => {
    return n1 + n2
  }
  //arrow function with multiple statements
  const sum3 = (n1, n2) => {
    let result = 0
    result = n1 + n2
    return result
  }

const echo = function(m){return m} //equals to const echo=m=>m
console.log(echo('INT201'))

