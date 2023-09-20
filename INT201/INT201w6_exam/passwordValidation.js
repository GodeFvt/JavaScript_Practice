// 65130500054 Phuttinan Phaksawaeng
function isPasswordValid(password) {
  if(password === undefined || password === null || password === "" || password.length < 8){
    return false
  }
  if(password.match(/[a-z]/g)?.length >= 1 && password.match(/[A-Z]/g)?.length >= 1 && password.match(/[@, #, $, %, ^, &, *, !]/g)?.length >= 1 && password.match(/[0, 1, 2, 3, 4, 5, 6, 7,8,9]/g)?.length >= 1){
    return true
  }
  return false
}
module.exports = isPasswordValid
