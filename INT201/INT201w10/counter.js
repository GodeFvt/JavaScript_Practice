function counter() {
    let count = 1
    function increment() {
      return ++count
    }
    function decrement() {
      return --count
    }
    return { increment, decrement }
  }
  //closure are increment() and decrement()
  // const c = counter()
  // c.increment()
  // c.decrement()
  //destructuring
  const { increment, decrement } = counter()
  console.log(increment()) //2
  console.log(decrement()) //1