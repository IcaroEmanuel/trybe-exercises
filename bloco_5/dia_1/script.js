/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()

Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function getElement(elements){
  let getElement = document.getElementsByTagName(elements)[0];
  getElement.innerHTML = "Trabalhando como desenvolvedor web em uma empresa top <3";
  return getElement;
}

getElement('p');

//Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorForGreen(element){
  let getElement = document.getElementsByClassName(element);

  for (index = 0; index < getElement.length; index += 1) {
    getElement[index].style.backgroundColor = 'rgb(76,164,109)';
  }

  return getElement;
}

(changeColorForGreen('main-content'));
