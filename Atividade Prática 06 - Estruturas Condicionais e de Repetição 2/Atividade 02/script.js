// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

const habilitacao = prompt("Possui habilitação ? S para sim ou N para NãO: ").toUpperCase();
const idadeMotorista = parseInt(prompt("Digite sua idade: "));




if (idadeMotorista >= 18 && habilitacao === "S") {
  console.log ("Pode dirigir");
} else {
  console.log ("Nao pode dirigir")
}


