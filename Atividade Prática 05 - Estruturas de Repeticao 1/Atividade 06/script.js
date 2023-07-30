// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let larguraTerreno = prompt("Digite a Largura do terreno: ");
let comprimentoTerreno = prompt("Digite o Comprimento do terreno: ");
let areaTerreno = 0

areaTerreno = larguraTerreno * comprimentoTerreno;

if (areaTerreno < 100) {
console.log ("TERRENO POPULAR");
}

if(areaTerreno >= 100 && areaTerreno <= 500) {
    console.log ("TERRENO MASTER");
} 

if (areaTerreno > 500){
    console.log ("TERRENO VIP");
}