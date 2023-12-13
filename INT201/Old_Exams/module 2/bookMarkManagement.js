const { template } = require("@babel/core");
class BookMark {
  constructor(isbn, totalPages = 0) {
    this.totalPages = totalPages;
    this.isbn = isbn;
    this.bookMarks = [];
  }
  addBookMark(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.bookMarks.push(pageNumber);
    }
    return this.bookMarks.length;
  }
  removeBookMark(pageNumber) {
    let indexPagerMove = this.bookMarks.findIndex((el) => el === pageNumber);
    if (indexPagerMove <= -1) {
      return undefined;
    }
    if (indexPagerMove > -1) {
      this.bookMarks.splice(indexPagerMove, 1);
    }
    return pageNumber;
  }
  goToFirstBookMark() {
    if (this.bookMarks.length === 0) {
      return undefined;
    }
    return this.bookMarks[0];
  }
  goToLastBookMark() {
    if (this.bookMarks.length === 0) {
      return undefined;
    }
    return this.bookMarks[this.bookMarks.length - 1];
  }
  getBookMarks() {
    return this.bookMarks;
  }
}

module.exports = BookMark;
