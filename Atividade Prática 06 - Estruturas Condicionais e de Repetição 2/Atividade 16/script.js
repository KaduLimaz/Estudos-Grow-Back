// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

const anoAtual = new Date().getFullYear(); // Obtém o ano atual
const anoNascimento = 2000; // Substitua pelo ano de nascimento da pessoa

const idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você pode votar este ano.");
} else {
  console.log("Você ainda não pode votar este ano.");
}
