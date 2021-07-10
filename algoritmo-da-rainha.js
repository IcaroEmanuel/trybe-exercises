//Fazer um algoritmo que verifica as condições dos movimentos da rainha no xadrez

//Verificar a posição da rainha
let queenRowPosition = 6;
let queenColumnPosition = 3;

//Verificar a posição do oponente
let oponentRowPosition = 2;
let oponentColumnPosition = 1;

//Verificar se a rainha está na mesma linha ou coluna do oponente
canAttack = false;

if (queenRowPosition === oponentRowPosition || queenColumnPosition === oponentColumnPosition){
  canAttack = true;
}

//Identificar se a posição do oponente está na posição diagonal inferior esquerda
for (index = 1; index < 8; index += 1){
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumn = queenColumnPosition - index;

  //Se a linha ou coluna for igual a zero, o tabuleiro terminou
  if (currentQueenColumn === 0 || currentQueenRow === 0){
    break;
  }

  //Se a posição currente da linha e da coluna da rainha forem iguais a do oponente, eu posso atacar
  if (currentQueenRow === oponentRowPosition && currentQueenColumn === oponentColumnPosition){
    canAttack = true;
    console.log("Ataque bem sucedido na diagonal esquerda");
  }
}

//Identificar se a posição do oponente está na posição diagonal superior esquerda

console.log('Pode atacar?', canAttack);