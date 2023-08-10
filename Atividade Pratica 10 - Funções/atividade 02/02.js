// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

function imparPar(numero){
 return numero % 2 !== 0;
}


const numero = 10

if (imparPar(numero)){
    console.log(numero + " é impar");
} else {
    console.log(numero + " é Par");
}