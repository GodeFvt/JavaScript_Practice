function wave(str) {
  str = str.split("");
  let strWave = "";
  const result = [];
  for (let i = 0; i < str.length; i++) {
    strWave = "";
    if (str[i] !== " ") {
      for (let j = 0; j < str.length; j++) {
        if (i === j) {
          strWave += str[j].toUpperCase();
        } else {
          strWave += str[j];
        }
      }
      result.push(strWave);
    }
  }
  return result;
}

function wave2(str) {
  let result = [];
  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}

function wave3(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      result.push(copy.join(""));
    }
  }
  return result;
}

console.log(wave("two words"));
console.log(wave2("two words"));
console.log(wave3("two words"));
