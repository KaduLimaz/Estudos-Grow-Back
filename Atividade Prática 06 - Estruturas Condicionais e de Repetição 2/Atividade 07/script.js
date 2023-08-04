// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.


let soma = 0;
let numeroAtual = 10;

do {
soma += numeroAtual;


numeroAtual++;

console.log(soma);
} while ( numeroAtual <= 100);

document.write(`Soma de todos os numero é: ${soma}`);