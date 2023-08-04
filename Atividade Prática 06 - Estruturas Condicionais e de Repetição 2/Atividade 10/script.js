// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//   forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//   pessoa, construa um programa que calcule e mostre seu peso ideal,
//   utilizando as seguintes fórmulas:
//   - para homens: (72.7 * Altura) – 58
//   - para mulheres: (62.1 * Altura) – 44.7



const sexo = prompt("Digite seu sexo sendo: 1 para sexo feminino e 2 para sexo masculino");
let pesoIdealF=0;
let pesoIdealM=0;

while(true) {

  if (sexo === "1") {
  let alturaF = Number(prompt("Digite sua altura: "));

  pesoIdealF = (62.1 * alturaF) - 44.7;
  document.write(`seu peso ideal é: ${pesoIdealF}`);
  break
  }
  if ( sexo === "2") {
    let alturaM = Number(prompt("Digite sua altura: "));

    pesoIdealM = (72.7 * alturaM) - 58;

    document.write(`seu peso ideal é: ${pesoIdealM}`);

    break
  }
  
}

