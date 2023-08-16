function display(content) {
  // if(content === null || content === undefined){
  //   return "no message";
  // }
  // return `your message is ${content}`;
  return content === null || content === undefined ? "no message": `your message is ${content}`;
}
module.exports = display
 