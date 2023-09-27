const book = {
    isbn: '123456789',
    title: 'Introduction to JavaScript',
    author: { firstname: 'Adam', lastname: 'Lee' },
    publisher: {
      name: 'HarperCollins',
      location: {
        name: 'Silicon',
        country: 'USA'
      }
    }
  }
  
  const { title } = book //equally to const title=book.title
  console.log(title)
  //store property value to new variable name
  
  const { publisher: publisherName, isbn: isbn_book } = book
  console.log(publisherName)
  console.log(isbn_book)
  
  const {
    publisher: {
      location: { country }
    }
  } = book
  console.log(country)