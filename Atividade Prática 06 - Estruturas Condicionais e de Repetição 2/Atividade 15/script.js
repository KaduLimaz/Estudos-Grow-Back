// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

const ladoA = 4;
const ladoB = 4;
const ladoC = 4;

const isTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
const isEquilatero = ladoA === ladoB && ladoB === ladoC;
const isIsosceles = ladoA === ladoB || ladoA === ladoC || ladoB === ladoC;

if (isTriangulo) {
  if (isEquilatero) {
    console.log("Triângulo equilátero");
  } else if (isIsosceles) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Não forma um triângulo");
}
