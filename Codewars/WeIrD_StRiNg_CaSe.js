function toWeirdCase(string) {
  let word = string.split("");
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      count = 0;
    } else if (count % 2 === 0) {
      word[i] = word[i].toUpperCase();
      count++;
    } else {
      count++;
    }
  }
  return word.join('');
}
console.log(toWeirdCase("This is a test"));
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
