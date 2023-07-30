// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

const distancia = parseInt(prompt("Distancia que vai percorrer em KM: "));

if (distancia <= 200) {

    passagem = distancia * 0.50;
} else {
    passagem = distancia * 0.45;
}

console.log(`O preço da passagem é R$${passagem.toFixed(2)}`);