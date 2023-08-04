// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

// 3. crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let diaSemana = parseInt(
  prompt(
    "Digite um número de 1 a 7, dia 1 é Domingo, dia 2 é segunda e assim por diante: "
  )
);

switch (diaSemana) {
  case 1:
    1
    console.log("Domingo");
    break;
  case 2:
    
    console.log("Segunda-Feira");
    break;
  case 3:
    
    console.log("Terça-Feira");
    break;
  case 4:
    
    console.log("Quarta-Feira");
    break;
  case 5:
    
    console.log("Quinta-Feira");
    break;
  case 6:
    
    console.log("Sexta-Feira");
    break;

  default:
    console.log("Dia não reconhecido");
    break;
}
