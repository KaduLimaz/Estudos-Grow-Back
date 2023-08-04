// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

// const numero = 1144;
// let soma = 0



// while( soma < 500) {
  
//   soma += numero * 3;
//   alert(soma);

//   break
// }


const numero = Number(prompt("Digite um número:"));
let soma = 0;

while (soma < 500) {
  soma += numero * 3;
}

// O último valor obtido antes de ultrapassar 500 é a soma - (numero * 3)
const ultimoValor = soma - (numero * 3);
console.log("Último valor: " + ultimoValor);
