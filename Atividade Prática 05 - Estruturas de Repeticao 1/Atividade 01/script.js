// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let totalAlunos = 0; //será usada para contar o número total de alunos
let somaIdades = 0; //será utilizada para acumular a soma das idades dos alunos.
let idade; // será utilizada para armazenar temporariamente a idade de cada aluno que será lida pelo usuário.

while (true) {
  idade = parseInt(prompt("Digite a idade do aluno ou 999 para parar!: "));

  if (idade === 999) {
    break;
  }

  totalAlunos++;
  somaIdades += idade;
}

if (totalAlunos === 0) {
  console.log("Nenhum aluno foi informado");
} else {
  const mediaIdades = somaIdades / totalAlunos;
  console.log(`Total de alunos na turma: ${totalAlunos}`);
  console.log(`Média de idade do grupo: ${mediaIdades.toFixed(2)}`);
}
