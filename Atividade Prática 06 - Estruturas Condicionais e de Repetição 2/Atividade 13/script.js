// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.


const numero = parseInt(prompt("Digite um numero para mostrar os numeros ímpares entre 1 e o digitado: "));

for (i = 1; i < numero; i+=2) {

  document.write(`<br> ${i}`);
}