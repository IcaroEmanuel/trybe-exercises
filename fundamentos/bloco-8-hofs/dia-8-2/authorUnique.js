const assert = require('assert');
const { books } = require('./data');

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
// ref: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort-gabarito/solutions/9d72cb46-f95e-41c5-8f6b-67dd39642f78/conteudo/c1c5b9c9-18ff-4457-8f71-d80ea9916aab?use_case=calendar
const authorUnique = () => 
  books.every((book) => 
    !books.some((bookSome) => 
      bookSome.author.birthYear === book.author.birthYear 
      && bookSome.author.name !== book.author.name));

const expectedResult = false;
assert.strictEqual(authorUnique(), expectedResult);
