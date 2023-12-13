const names = ["Alice", "Bob", "Ann", "Cath"];
const first = names.reduce((a, b) => a + b.charAt(0), "");
console.log(first);

const buyProducts = [
  { price: 50, quantity: 2 },
  { price: 299, quantity: 10 },
  { price: 15, quantity: 5 },
];

const totol = buyProducts.reduce((sum,obj) => sum + (obj.price * obj.quantity),0)

console.log(totol);


const nums = [-5,-6,7,8,9,-1,0]
const repost = nums.map((a)=> a < 0 ? 0 : a)
console.log(repost);