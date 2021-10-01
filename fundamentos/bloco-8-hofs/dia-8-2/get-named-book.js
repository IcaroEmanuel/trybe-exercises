const assert = require('assert');
const { books } = require('./data');

// Encontre o primeiro livro cujo nome possui 26 caracteres
const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
}

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

assert.deepStrictEqual(getNamedBook(), expectedResult);
