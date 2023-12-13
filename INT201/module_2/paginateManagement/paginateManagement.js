// const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from "./lib/paginate.js";
// import { products } from "./data/products.js";

const { getItemsOfCurrentPage, getTotalPages } = require("./lib/paginate.js");
const products = require("./data/products.js");

function paginateManagement(items, rows) {
  let products = items;
  let rowsPerPage = rows;
  function showPageNumbers() {
    const noPages = getTotalPages(products, rowsPerPage);
    for (let i = 1; i <= noPages; i++) {
      const pagination = document.getElementsByClassName("pagination")[0];
      const newButton = document.createElement("button");
      newButton.setAttribute("id", i);
      newButton.textContent = i;
      newButton.addEventListener("click", pageHandler);
      pagination.appendChild(newButton);
    }
  }

  function showItemsOfCurrentPage(currentPageNumber) {
    const itemsOfCurrentPage = getItemsOfCurrentPage(
      products,
      currentPageNumber,
      rowsPerPage
    );
    itemsOfCurrentPage.forEach((e) => {
      const listProduct = document.getElementById("products");
      const newLi = document.createElement("li");
      newLi.textContent = `ID:${e.id}, NAME:${e.name}`;
      listProduct.appendChild(newLi);
    });
  }
  function pageHandler(event) {
    const listProduct = document.getElementById("products");
    //listProduct.textContent = ""
    const list = Array.from(listProduct.querySelectorAll("li"));
    list.forEach((e) => {
      e.remove();
    });
    const pagination = document.getElementsByClassName("pagination")[0];
    const allButton = Array.from(pagination.querySelectorAll("button"));
    allButton.forEach((e) => {
      e.style = "border: 1px solid #999";
    });
    if (event === undefined) {
      showItemsOfCurrentPage(1);
      allButton[0].style = "background-color: LightSteelBlue";
    } else {
      const currentButton = event.target;
      const idButton = currentButton.getAttribute("id");
      showItemsOfCurrentPage(idButton);
      currentButton.style = "background-color: LightSteelBlue";
    }
  }
  return {
    showPageNumbers,
    pageHandler,
  };
}

module.exports = paginateManagement;
// export { paginateManagement };
// const { showPageNumbers, showItemsOfCurrentPage, pageHandler } = paginateManagement(products, 10);
//showItemsOfCurrentPage(1)
// showPageNumbers();
