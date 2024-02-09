// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from "./lib/paginate.js";
import { products } from "./data/products.js";

// const { getItemsOfCurrentPage, getTotalPages } = require("./lib/paginate.js");
// const products = require("./data/products.js");

function paginateManagement(items, rows) {
  const rowsPerPage = rows;
  const products = items;

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemsOfCurrentPage = getItemsOfCurrentPage(
      products,
      currentPageNumber,
      rowsPerPage
    );
    const ulElement = document.getElementById("products");

    itemsOfCurrentPage.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`;
      ulElement.appendChild(liElement);
    });
  };

  const pageHandler = (event) => {
    const divPagination = document.querySelector(".pagination");
    const buttons = divPagination.querySelectorAll("button");

    buttons.forEach((button) => {
      button.style.border = "1px solid #999";
      button.style.backgroundColor = "#fff";
    });

    if (event === undefined) {
      showItemsOfCurrentPage(1);
      buttons[0].style.backgroundColor = "LightSteelBlue";
    } else {
      const currentPage = event.target.id;
      const ulElement = document.getElementById("products");
      ulElement.textContent = "";
      showItemsOfCurrentPage(currentPage);
      event.target.style.backgroundColor = "LightSteelBlue";
    }

    buttons.forEach((button) => {
      button.addEventListener("click", pageHandler);
    });
  };

  const showPageNumbers = () => {
    const totalPages = getTotalPages(products, rowsPerPage);
    const divPagination = document.querySelector(".pagination");

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.setAttribute("id", i);
      divPagination.appendChild(button);
    }
  };

  return {
    showPageNumbers,
    pageHandler,
  };
}
// module.exports = paginateManagement;
export { paginateManagement };
 const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers();
pageHandler();
