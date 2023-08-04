// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

const totalEleitores = 1000; // Substitua pelo número total de eleitores
let votosValidos = 700;     // Substitua pelo número de votos válidos
let votosBrancos = 150;     // Substitua pelo número de votos brancos
let votosNulos = 100;       // Substitua pelo número de votos nulos

// Verifica se a soma dos votos não ultrapassa o número total de eleitores
const totalVotos = votosValidos + votosBrancos + votosNulos;
if (totalVotos > totalEleitores) {
  console.log("Erro: A soma dos votos é maior que o número total de eleitores.");
} else {
  // Calcula os percentuais de cada tipo de voto
  const percentualValidos = (votosValidos / totalEleitores) * 100;
  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;

  // Exibe os resultados no console
  console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
  console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
}
