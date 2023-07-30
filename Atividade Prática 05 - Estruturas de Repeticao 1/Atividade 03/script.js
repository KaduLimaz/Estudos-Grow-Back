
// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!


const numeroInicial = parseInt(prompt("Digite o numero inicial: "));
const numeroFinal = parseInt(prompt("Digite o numero final: "));
const incremento = parseInt(prompt("Digite o numero de vez que vai ser incrementado: "));

let contagem = "Contagem: ";

for (i = numeroInicial; i < numeroFinal; i+= incremento )  {

  contagem += `${i} `;

}

contagem += "Acabou1!"
console.log (contagem);
