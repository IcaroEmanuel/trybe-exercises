const assert = require('assert');
const { books } = require('./data');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
const authorBornIn1947 = () => {
  const nameAuthor = books.find((book) => book.author.birthYear === 1947);
  return nameAuthor.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
