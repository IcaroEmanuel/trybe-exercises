// Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante, deseja-se juntá-las em apenas uma lista de objetos

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// ref: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-map-e-filter/eb53fd32-be11-4a70-a925-c29e1d7f8925/conteudos/c7ead6bf-1f21-4052-8ee9-ae667315947b/arraymap/9c258387-484c-4f08-b5a2-937cc4a5044b?use_case=next_button
const joinListProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  {[product]: listPrices[index]}));


const productsList = joinListProducts(products, prices);
console.log(productsList);
