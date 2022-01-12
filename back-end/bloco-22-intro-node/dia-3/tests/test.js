const { expect } = require('chai');

const { checkNumberType } = require('../check-numbers');

describe('Função checkNumberType()', () => {
  describe('Quando o número for positivo', () => {
    it('Deve retornar "positivo"', () => {
      const checkNumber = checkNumberType(1);
  
      expect(checkNumber).to.be.equals('positivo');
    });
  });
  
  describe('Quando o número for negativo', () => {
    it('Deve retornar "negativo"', () => {
      const checkNumber = checkNumberType(-1);
  
      expect(checkNumber).to.be.equals('negativo');
    });
  });
  
  describe('Quando o número for neutro', () => {
    it('Deve retornar neutro', () => {
      const checkNumber = checkNumberType(0);
  
      expect(checkNumber).to.be.equals('neutro');
    });
  });
  
  describe('Quando o valor passado não for um número', () => {
    it('Deve retornar "o valor deve ser um número"', () => {
      const checkNumber = checkNumberType('1');
  
      expect(checkNumber)
        .to
        .be
        .equals('o valor deve ser um número');
    });
  });
});


