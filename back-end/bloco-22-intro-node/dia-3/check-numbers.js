const checkNumberType = (number) => {
  if(typeof number !== 'number') {
    return 'o valor deve ser um número';
  };

  if (number === 0) {
    return 'neutro';
  };

  if(number > 0) {
    return 'positivo';
  };

  if(number < 0) {
    return 'negativo';
  };
};

const number = (checkNumberType(0));
console.log(number);

module.exports = {
  checkNumberType,
};
