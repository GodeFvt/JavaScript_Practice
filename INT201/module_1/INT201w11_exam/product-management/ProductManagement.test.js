const productManagement = require('./ProductManagement.js') // Replace with the correct import path

describe('Product Catalog Functions', () => {
  let productCatalog
  // Initialize sample products for testing
  beforeEach(() => {
    productCatalog = productManagement()
  })
  afterEach(() => {
    productCatalog.removeAll()
  })

  // Test the addProduct and getAllProducts functions
  test('addProduct should add a product to the catalog and getAllProducts should be retrieved all added products', () => {
    const product1 = {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99
    }
    productCatalog.addProduct(product1)

    expect(productCatalog.getAllProducts()).toContainEqual(product1)
    expect(productCatalog.getAllProducts().length).toBe(1)
    const product2 = {
      id: 2,
      name: 'T-shirt',
      category: 'Clothing',
      price: 19.99
    }
    productCatalog.addProduct(product2)
    expect(productCatalog.getAllProducts()).toContainEqual(product2)
    expect(productCatalog.getAllProducts().length).toBe(2)
  })

  // Test the removeAll function
  test('removeAll should remove all products from the catalog', () => {
    const product1 = {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99
    }
    productCatalog.addProduct(product1)
    const product2 = {
      id: 2,
      name: 'T-shirt',
      category: 'Clothing',
      price: 19.99
    }
    productCatalog.addProduct(product2)
    productCatalog.removeAll()
    expect(productCatalog.getAllProducts().length).toBe(0)
  })

  // Test the searchByName function
  test('searchByName should return products with matching names', () => {
    const product1 = {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99
    }
    productCatalog.addProduct(product1)
    const product2 = {
      id: 2,
      name: 'T-shirt',
      category: 'Clothing',
      price: 19.99
    }
    productCatalog.addProduct(product2)
    const results = productCatalog.searchByName('Laptop')
    expect(results.length).toBe(1)
    expect(results).toContainEqual(product1)
    expect(results).not.toContainEqual(product2)
  })

  // Test the searchByPriceRange function
  test('searchByPriceRange should return products within the price range', () => {
    const product1 = {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99
    }
    productCatalog.addProduct(product1)
    const product2 = {
      id: 2,
      name: 'T-shirt',
      category: 'Clothing',
      price: 19.99
    }
    productCatalog.addProduct(product2)
    const results = productCatalog.searchByPriceRange(0, 50)
    expect(results.length).toBe(1)
    expect(results).toContainEqual(product2)
    expect(results).not.toContainEqual(product1)
  })
})
