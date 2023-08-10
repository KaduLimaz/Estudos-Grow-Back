// Crie uma função chamada calcularMedia(nota1, nota2, nota3,
//     nome), que recebe 4 parâmetros sendo três inteiros e um texto
//     (String). Esta função será chamada ao abrir a página e mostrará um
//     alerta com a média. Exemplo: “João, sua média é 70.” A função
//     também deve mostrar no console.log() as notas recebidas. Exemplo
//     “Nota 1: 60,Nota 2: 70,Nota 3: 80”.


function calcularMedia(nota1, nota2, nota3, nome) {

    const media = (nota1 + nota2 + nota3) / 3
    console.log (`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);

    alert(`${nome}, sua media é: ${media}`);


}

const nomeAluno = prompt("Digite seu nome: ");
const nota1 = parseInt(prompt("Digite primeira nota: "));
const nota2 = parseInt(prompt("Digite segunda nota: "));
const nota3 = parseInt(prompt("Digite terceira nota: "));

calcularMedia(nota1,nota2,nota3,nomeAluno)