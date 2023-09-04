function add(n) {
  return (h) => n + h;
}
// function add2(n) {
// 	return function(h) {
//         return n + h;
//      }
// }

//Test
console.log(add(10)(10));
console.log(add(100)(100));
console.log(add(-30)(80));
console.log(add(-10)(-10));
