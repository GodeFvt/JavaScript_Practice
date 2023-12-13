const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
  ]
  const getPassingNames = (a) => {
    let arr = []
    studentScores.forEach((a) => a.score > 70 ? arr.push(a.name.toUpperCase()) : [] )
    return arr
  }
  const passingNames = getPassingNames(studentScores)
  console.log(passingNames)
   