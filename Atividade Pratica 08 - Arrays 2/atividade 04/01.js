// 4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
// retorne a união dos dois em um novo vetor.

let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vetor2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function uniao(vetor1, vetor2) {
    
    const uniaoArray = [];

      uniaoArray.push(vetor1,vetor2);


    return uniaoArray;
  }
  

  
  const resultado = uniao(vetor1, vetor2);
  console.log(resultado);
  