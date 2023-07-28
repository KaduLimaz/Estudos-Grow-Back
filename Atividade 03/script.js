// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6



const n = parseInt(prompt("Digite o numero para saber a tabuada"));
const i = parseInt(prompt("Digite o numero para saber até onde vai a tabuada"));

for (j = 1; j < i; j+=1) {

  const resultado = n * j;

  console.log (`${j} * ${n} = ${resultado}`);


}