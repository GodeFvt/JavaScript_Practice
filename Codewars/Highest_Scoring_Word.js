function high(x) {
  let words = x.split(" ");
  let highest = 0;
  let highestWord = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordScore = 0;
    for (let j = 0; j < word.length; j++) {
      wordScore += word.charCodeAt(j) - 96;
    }
    if (wordScore > highest) {
      highest = wordScore;
      highestWord = word;
    }
  }
  return highestWord;
}
console.log(high("man i need a taxi up to ubud"));

// a เมื่อใช้ .charCodeAt() จะได้ 97 เลยลบ 96 เพื่อได้ตำเเหน่ง
