//Criar um algoritmo que simule o sorteio da megasena

//1 - Criar uma estrutura de números escolhidos pela pessoa que está jogando
let numerosEscolhidos = [19, 23, 13, 5, 25, 24]

//2 - Criar uma estrutura de 6 números aleatórios de 1 a 60
let numerosSorteados = []

for (let contador = 0; contador < 6; contador += 1){
  let numeroAleatorio = Math.floor(Math.random() * 60) + 1
  numerosSorteados.push(numeroAleatorio)
}

//3 - Comparar os números escolhidos com os números sorteados e verificar se há algum número igual 
let acertos = 0
for (let index = 0; index < numerosSorteados.length; index += 1){
  let numeroDoSorteio = numerosSorteados[index]

  for(let indexNumerosEscolhidos = 0; indexNumerosEscolhidos < numerosEscolhidos.length; indexNumerosEscolhidos += 1){
    let numeroDoUsuario = numerosEscolhidos[indexNumerosEscolhidos]

    if (numeroDoSorteio === numeroDoUsuario) {
      acertos += 1
    }
  }
}

//4 - Mostra o resultado na tela
console.log(`Jogo do usuário: ${numerosEscolhidos} \n Números Sorteados: ${numerosSorteados} \n Resultado Final: ${acertos}`)