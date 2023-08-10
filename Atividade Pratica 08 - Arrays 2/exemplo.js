// Definição da função calcularMedia que recebe as notas e o tipo de média
function calcularMedia(notas, tipo) {
  // Verificação do tipo de média usando uma estrutura condicional 'if'
  if (tipo === "A") {
    // Cálculo da média aritmética
    const mediaAritmetica = notas.reduce((total, nota) => total + nota, 0) / notas.length;
    return mediaAritmetica; // Retorno da média aritmética calculada
  } else if (tipo === "P") {
    // Definição dos pesos para a média ponderada em um array
    const pesos = [5, 3, 2];
    // Cálculo do somatório dos produtos das notas pelos pesos usando 'reduce'
    const somatorioProdutos = notas.reduce((total, nota, index) => total + nota * pesos[index], 0);
    // Cálculo do somatório dos pesos usando 'reduce'
    const somatorioPesos = pesos.reduce((total, peso) => total + peso, 0);
    // Cálculo da média ponderada dividindo o somatório dos produtos pelo somatório dos pesos
    const mediaPonderada = somatorioProdutos / somatorioPesos;
    return mediaPonderada; // Retorno da média ponderada calculada
  } else {
    // Retorno de uma mensagem de erro caso o tipo de média seja inválido
    return "Tipo de média inválido. Use 'A' para média aritmética ou 'P' para média ponderada.";
  }
}

// Notas do aluno armazenadas em um array
const notasAluno = [7.5, 8.0, 9.2];
// Tipo de média a ser calculada (pode ser 'A' para média aritmética ou 'P' para média ponderada)
const tipoMedia = "P";

// Chamada da função calcularMedia com as notas do aluno e o tipo de média como argumentos
const mediaCalculada = calcularMedia(notasAluno, tipoMedia);

// Exibição do resultado no console
console.log("Média calculada:", mediaCalculada);
