// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

const cadastro = [];

function cadastrarPessoa() {
  const nome = prompt("Digite o nome: ");
  const idade = prompt("Digite a idade: ");
  const trabalhando =
    prompt("Esta trabalhando ? 'SIM' ou 'NAO'").toUpperCase() === "SIM";

  let salario = null;
  if (trabalhando) {
    salario = parseFloat(prompt("Digite o salario: "));
  }

  const pessoa = { nome, idade, trabalhando, salario };
  cadastro.push(pessoa);
}

function querContinuar() {
  const resposta = prompt(
    "Deseja continuar cadastrando ? ('sim' ou 'não')"
  ).toLowerCase();
  return resposta === "sim";
}

do {
  cadastrarPessoa();
} while (querContinuar());

const desempregados = cadastro.filter((pessoa) => !pessoa.trabalhando);
const empregadosMaior2500 = cadastro.filter(
  (pessoa) => pessoa.trabalhando && pessoa.salario > 2500
);
const empregadosMenorIgual2500 = cadastro.filter(
  (pessoa) => pessoa.trabalhando && pessoa.salario <= 2500
);

console.log("Pessoas desempregadas:");
desempregados.forEach((pessoa) => {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});

console.log("Pessoas empregadas com salário maior que 2500:");
empregadosMaior2500.forEach((pessoa) => {
  console.log(
    `Nome ${pessoa.nome}, Idade: ${pessoa.idade}, Salario: ${pessoa.salario} `
  );
});

console.log("Pessoas empregadas com salário menor ou igual a 2500:");
empregadosMenorIgual2500.forEach((pessoa) => {
  console.log(
    `Nome ${pessoa.nome}, Idade: ${pessoa.idade}, Salario: ${pessoa.salario} `
  );
});

// Exibir o cadastro completo
console.log("Cadastro de pessoas:");
console.log(cadastro);
