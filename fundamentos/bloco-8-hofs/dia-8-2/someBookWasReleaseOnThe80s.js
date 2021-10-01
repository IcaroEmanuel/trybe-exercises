const assert = require('assert');
const { books } = require('./data');

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário
const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);

const expectedResult = true;
assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
