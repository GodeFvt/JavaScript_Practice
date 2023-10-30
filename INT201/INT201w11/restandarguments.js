let mid = 20 ;
let final = 5 ;
let fname = 'Ada'

function getScore(){
    let final = 30 ;
    function yourScore(){
        return fname + " score " + (final+mid)
    }
    return yourScore
}
console.log(getScore()())