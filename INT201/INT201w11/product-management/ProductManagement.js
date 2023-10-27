function ProductManagement() {
  //add products variable here
  let products = [];
  function getAllProducts() {
    return products;
  }

  function addProduct(product) {
    products.push(product);
  }

  function searchByName(name) {
    return products.filter((product) => product.name === name);
  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice);
  }

  function removeAll() {
    products = [];
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct,
  };
}
module.exports = ProductManagement;
const productCatalog = ProductManagement();
