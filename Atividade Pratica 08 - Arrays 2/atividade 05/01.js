// 5. Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.



function verdadeiro(vetor1, n1) {
  

  for (i = 0; i < vetor1.length; i++){

    if (n1 === vetor1[i]) {
      console.log("verdadeiro");
    } else {
      console.log("Falso !!");
    }

  }
    
 
}
const vetorExemplos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const numeroExemplo = 10;
console.log(verdadeiro(vetorExemplos,numeroExemplo));
