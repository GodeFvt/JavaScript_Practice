function generateChatRoomNames(users) {
  let arr = users.map((element) => element.split(" ")).flat();
  let fName = [];
  let lName = [];
  let lName2 = [];
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    fName.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  for (let i = 1; i < arr.length; i += 2) {
    lName.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  for (let i = 0; i < lName.length; i++) {
    lName2.push(lName[i].charAt(0));
  }

  for (let i = 0; i < lName.length; i++) {
    const fil_fName = fName.filter((element) => element === fName[i]);
    const fil_lName = lName2.filter((element) => element === lName2[i]);
    if (fil_fName.length == 1) {
      result.push(fName[i]);
    } else if (
      fil_fName.length >= 1 &&
      fil_lName.length >= 1 &&
      fil_lName[i] === fil_lName[i + 1] &&
      fil_fName.length != fil_lName.length
    ) {
      result.push(fName[i] + " " + lName[i]);
    } else if (
      fil_fName.length >= 1 &&
      fil_lName.length >= 1 &&
      fil_fName.length != fil_lName.length
    ) {
      result.push(fName[i] + " " + lName[i].charAt(0));
    } else if (fil_fName.length >= 1 && fil_lName.length >= 1) {
      result.push(fName[i] + " " + lName[i].charAt(0));
    }
  }
  return result.sort();
}

const names = ["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"];
console.log(generateChatRoomNames(names));
