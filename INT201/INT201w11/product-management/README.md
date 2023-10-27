[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NnV7rXQd)
# Product Catalog Management

Create ProductManagement function to contain variable named products that contains product objects. A single product is typically represented as

- id: This is a unique identifier for the product.
- name: The name of the product
- category: The category is used to classify the product into a broader group.
- price: The price represents the cost of the product.
  - for example,
    {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 999.99,
    }

# Function Explanations

Here are detailed explanations of each function in the productManagement function:

- getAllProducts(): Rreturns the entire products. Returns an array of all products.

- addProduct(product): Adds a new product to the products array.

- removeAll(): remove all products in products array.

- searchByName(name): Searches for products with names containing the specified search term (case-insensitive).
  Returns an array of matching products.

- searchByPriceRange(minPrice, maxPrice): Searches for products within the specified price range. Returns an array of products with prices falling within the given range.
