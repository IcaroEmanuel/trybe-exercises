//Criar um algoritmo que simule o sorteio da megasena

//1 - Criar uma estrutura de números escolhidos pela pessoa que está jogando
let numerosEscolhidos = [19, 23, 13, 5, 25, 24]

//2 - Criar uma estrutura de 6 números aleatórios de 1 a 60
let numerosSorteados = []

for (let contador = 0; contador < 6; contador += 1){
  let numeroAleatorio = Math.floor(Math.random() * 60) + 1
  numerosSorteados.push(numeroAleatorio)
}

console.log(numerosSorteados)
//3 - Comparar os números escolhidos com os números sorteados e verificar se há algum número igual 
