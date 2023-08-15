const data1 = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

// // 1. Imprima no console a quantidade de pessoas Total.

// const quantidadePessoas = data1.reduce((valorAtual, valorInicial) => {
//     return valorAtual + 1
// }, 0 )

// console.log(`Quantidade de pessoas é: ${quantidadePessoas}`);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.

// const sexoF = data1.filter((pessoa)=>{ return pessoa.sexo === 'F'});

// const pessoasF = sexoF.length;

// console.log(pessoasF);

// 3. Imprima no console a soma do salário de todas as pessoas.

// const somaSalario = data1.reduce((valorAtual,valorInicial) =>{ return valorAtual + valorInicial.salario},0);

// console.log(`Soma dos salarios é: ${somaSalario}`);

// // 4. Imprima no console a média do salário de todas as pessoas.

// const mediaSalario = (somaSalario / 7).toFixed(2);

// console.log(mediaSalario);

// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino

// let salarioPessoasM = 0;

// for (const pessoa of data1) {

//   if (pessoa.sexo === "M"){
//     salarioPessoasM += pessoa.salario
//   }
  
// }

// console.log("Soma dos salários do sexo masculino:", salarioPessoasM);

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino

// let somaSalariosMasculinos = 0;
// let countHomens = 0;

// for (const pessoa of data1) {
//   if (pessoa.sexo === "M") {
//     somaSalariosMasculinos += pessoa.salario;
//     countHomens++;
//   }
// }

// const mediaSalariosMasculinos = (somaSalariosMasculinos / countHomens).toFixed(2);

// console.log("Média dos salários do sexo masculino:", mediaSalariosMasculinos);

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.

const salarioSuperior7000 = data1.some(pessoa => pessoa.salario > 7000);

console.log(salarioSuperior7000);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.

const indexEvaTrindade = data1.findIndex(pessoa => pessoa.nome === 'Eva Trindade');

console.log("Posição de Eva Trindade:", indexEvaTrindade);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".

const pessoasComSobrenomeSilva = data1.filter(pessoa => pessoa.nome.includes("Silva"));

console.log("Pessoas com sobrenome Silva:", pessoasComSobrenomeSilva);


// 10. Imprima os nomes utilizando o MAP

const nomes = data1.map(pessoa => pessoa.nome);

console.log("Nomes:", nomes);



