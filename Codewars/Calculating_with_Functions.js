function zero(f) {
  return f ? f(0) : 0;
}
function one(f) {
  return f ? f(1) : 1;
}
function two(f) {
  return f ? f(2) : 2;
}
function three(f) {
  return f ? f(3) : 3;
}
function four(f) {
  return f ? f(4) : 4;
}
function five(f) {
  return f ? f(5) : 5;
}
function six(f) {
  return f ? f(6) : 6;
}
function seven(f) {
  return f ? f(7) : 7;
}
function eight(f) {
  return f ? f(8) : 8;
}
function nine(f) {
  return f ? f(9) : 9;
}

function plus(New) {
  return (Old) => Old + New;
}
function minus(New) {
  return (Old) => Old - New;
}
function times(New) {
  return (Old) => Old * New;
}
function dividedBy(New) {
  return (Old) => Math.floor(Old / New);
}

console.log(one(plus(two())));
console.log(four(plus(nine())));
console.log(seven(times(five())));
console.log(six(dividedBy(two())));
