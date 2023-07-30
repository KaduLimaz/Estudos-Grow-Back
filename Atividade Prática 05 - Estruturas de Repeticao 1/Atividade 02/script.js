// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salarioMasculino = 0;
let salarioFeminino = 0;
let salarioTotalF = 0;
let salarioTotalM = 0;

while (true){
  let sexo = prompt("Digite seu sexo M ou F: ").toUpperCase();
   
  if ( sexo === "M"){
      salarioMasculino = parseInt(prompt("Digite seu salario: "));
      salarioTotalM += salarioMasculino


   }
   if (sexo === "F") {
    salarioFeminino = parseInt(prompt("Digite seu salario: "));
    salarioTotalF += salarioFeminino

   } 
  
    let deNovo = prompt("Deseja inserir outra informação ? S ou N: ").toUpperCase();
    if (deNovo === "N"){
      break
    }
        

  
}

console.log(`Total salario feminino: ${salarioTotalF}`);
console.log(`Total salario masculino: ${salarioTotalM}`);
