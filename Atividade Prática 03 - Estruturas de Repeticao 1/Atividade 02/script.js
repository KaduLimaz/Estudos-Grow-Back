// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.


let alturaPedro = 1.50; 
let alturaLucas = 1.10; 
let anosParaIgualdade = 0; 
let anosParaMaior = 0; 

while (alturaLucas <= alturaPedro) {
  alturaPedro += 0.02; 
  alturaLucas += 0.03; 
  anosParaIgualdade++; 

  
  if (alturaLucas > alturaPedro) {
    anosParaMaior = anosParaIgualdade;
  }
}


console.log(`a. Lucas e Pedro terão o mesmo tamanho em ${anosParaIgualdade} anos.`);
console.log(`b. Lucas será maior que Pedro em ${anosParaMaior} anos.`);
