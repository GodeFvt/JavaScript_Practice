function toWeirdCase(string) {
  let word = string.split(" ").join(" ");
  let str = word.match(/.{2}/g);
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  // return str.join('')
  return word;
}
console.log(toWeirdCase("This is a test"));
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
