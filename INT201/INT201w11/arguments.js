function ops(n1, n2, n3) {
    console.log(arguments) //special objects
    console.log(arguments.length)
    for (const a of arguments) {
      console.log(a)
    }
    arguments[0] = 555 //n1=555
    console.log(n1)
  }
  ops('a', true, 3)