//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;

for (let contaLinha = 0; contaLinha < n; contaLinha += 1){
  let resultado = "";

  for (let criaLinha = 0; criaLinha < n; criaLinha += 1){
    resultado = resultado + '*'
    
  }
  console.log(resultado);
}