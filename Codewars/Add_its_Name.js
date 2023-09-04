function addName(obj, name, value) {
  return { ...obj, [name]: value };
}
//Test
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
