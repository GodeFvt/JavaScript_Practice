// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.

function perimeter(l, num){
	return l === "s" ? 4 * num : 6.28 * num
}

console.log(perimeter("s", 1))
console.log(perimeter("s", 4))
console.log(perimeter("c", 9))
console.log(perimeter("c", 13))