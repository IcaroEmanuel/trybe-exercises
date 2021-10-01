const assert = require('assert');
const { books } = require('./data');

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
function everyoneWasBornOnSecXX() {
  // data de nascimento tem que ser >1900 e <=2000
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
}

const expectedResult = false;
assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
