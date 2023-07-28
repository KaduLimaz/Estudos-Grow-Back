// Contextualização do desafio:
// As Ilhas Growdev formam um reino independente nos mares do Pacífico.
// Como é um reino recente, a sociedade é muito influenciada pela
// informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
// GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
// programação dos caixas automáticos de um grande banco das Ilhas
// Growdevs.

// Tarefa:
// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

let gc50 = 50;
let gc10 = 10;
let gc5 = 5;
let gc1 = 1;
let nota50 = 0;
let nota10 = 20; 
let nota5 = 20; 
let nota1 = 20;
let quantidadeNota50 = 0;
let quantidadeNota10 = 0; 
let quantidadeNota5 = 0; 
let quantidadeNota1 = 0; 

let saque = parseInt(prompt("Digite o Saque á ser realizado!"));

if (isNaN(saque)){
    alert("Digite um número!")
} else {
    while (saque / 50 >= 1 && nota50 > 0) {
        saque = saque - gc50;
        nota50 = nota50 - 1;
        quantidadeNota50++;    
    }
    while (saque / 10 >= 1 && nota10 > 0) {
        saque = saque - gc10;
        nota10 = nota10 - 1;  
        quantidadeNota10++;
    }
    while (saque / 5 >= 1 && nota10 > 0) {
        saque = saque - gc5;
        nota5 = nota5 - 1;
        quantidadeNota5++ 
    }
    while (saque / 1 >= 1 && nota10 > 0) {
        saque = saque - gc1;
        nota1 = nota1 - 1;
        quantidadeNota1++
    }
}
document.write(`<p>Quantidade de notas de 50: ${quantidadeNota50}.</p> <p>Quantidade de notas de 10: ${quantidadeNota10}.</p> <p>Quantidade de notas de 5: ${quantidadeNota5}.</p> <p>Quantidade de notas de 1: ${quantidadeNota1}.</p>`)
