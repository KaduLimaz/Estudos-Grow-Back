// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;


let menorAltura = 0;
let maiorAltura = 0;

for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt("Digite sua Altura: "));
    if ( altura > maiorAltura) {
        maiorAltura = altura;
    }
    if (menorAltura === 0 || altura < menorAltura) {
        menorAltura = altura;
    }

}

console.log ("a menor altura e", menorAltura);
console.log ("a maior altura e", maiorAltura);