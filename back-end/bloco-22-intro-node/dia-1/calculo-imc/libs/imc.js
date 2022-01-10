const readlineSync = require('readline-sync');

const askWeight = () => readlineSync.questionFloat('Peso: ');
const askHeight = () => readlineSync.questionFloat('Altura: ');
const imcCalculator = (weight, height) => weight / (height ** 2);

module.exports = {
  askWeight,
  askHeight,
  imcCalculator,
};
