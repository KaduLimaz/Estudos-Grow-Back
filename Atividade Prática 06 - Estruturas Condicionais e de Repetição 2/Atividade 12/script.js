// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).


// let idade = parseInt(prompt("Digite sua idade: "));

let idade = 19

if (idade >= 18 && idade <= 67 ) {

  alert("Pode doar sangue");
} else {
  alert("Não pode doar sangue");
}