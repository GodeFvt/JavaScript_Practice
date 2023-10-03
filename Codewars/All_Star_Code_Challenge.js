function rotate(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const arr = str.split("");
    const firstElement = arr.shift();
    const newStr = arr.join("");
    str = newStr + firstElement;
    result.push(str);
  }
  return result;
}
// https://www.codewars.com/kata/586560a639c5ab3a260000f3
console.log(rotate("Hello"));
