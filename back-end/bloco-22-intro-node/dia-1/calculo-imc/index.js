const { askWeight, askHeight, imcCalculator } = require('./libs/imc');

const weight = askWeight();
const height = askHeight();
const imc = imcCalculator(weight, height)
console.log(imc.toFixed(2));
