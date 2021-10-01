const { books } = require('./data');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
const authorBornIn1974 = () => {
  return books.find((book) => book.author.birthYear === 1947);
}

const author = authorBornIn1974()
console.log(author);
