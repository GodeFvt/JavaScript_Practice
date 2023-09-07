Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(this) || !Array.isArray(other)) {
    return false;
  }
  if (this.length !== other.length) {
    return false;
  }
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
      return false;
    }
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    }
  }
  return true;
};

console.log([2, 2, 2].sameStructureAs([2, 2, 2])); // true
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2])); // false
console.log([[[], []]].sameStructureAs([[[], []]])); // true
console.log([[[], []]].sameStructureAs([[1, 1]])); // false
