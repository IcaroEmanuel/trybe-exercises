const assert = require('assert');
const { books } = require('./data');

// Retorne o nome do livro de menor nome
const smallerName = () => {
  let nameBook = '';
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
