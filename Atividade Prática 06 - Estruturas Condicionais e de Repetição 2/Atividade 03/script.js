// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let diaSemana = parseInt(prompt("Digite um número de 1 a 7, dia 1 é Domingo, dia 2 é segunda e assim por diante: "))

if (diaSemana === 1) {
  console.log("Domingo");
}
else if (diaSemana === 2) {
  console.log("Segunda-feira");
}
if (diaSemana === 3) {
  console.log("Terça-feira");
}
else if (diaSemana === 4) {
  console.log("Quarta-feira");
}
if (diaSemana === 5) {
  console.log("Quinta-feira");
}
else if(diaSemana === 6) {
  console.log("Sexta-feira");
}
else {
  console.log("Dia não reconhecido");
}