function scramble(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
  for (let i = 0; i < str2.length; i++) {
    if (str1.find((el) => el === [...str2]) === undefined) {
      return false;
    }
    str1[str1.findIndex((el) => el === str2[i])] = " ";
  }
  return true;
}
function scramble2(str1, str2) {
  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char] -= 1;
  }
  return true;
}
console.log(scramble("scriptjavx", "javascript"));
