// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).



function calcularMedia(notas, tipo) {
    if (tipo === "A") {
      const mediaAritmetica = notas.reduce((total, nota) => total + nota, 0) / notas.length;
      return mediaAritmetica;
    } else if (tipo === "P") {
      const pesos = [5, 3, 2];
      const somatorioProdutos = notas.reduce((total, nota, index) => total + nota * pesos[index], 0);
      const somatorioPesos = pesos.reduce((total, peso) => total + peso, 0);
      const mediaPonderada = somatorioProdutos / somatorioPesos;
      return mediaPonderada;
    } else {
      return "Tipo de média inválido. Use 'A' para média aritmética ou 'P' para média ponderada.";
    }
  }
  
  const notasAluno = [7.5, 8.0, 9.2];
  const tipoMedia = "P"; 
  
  const mediaCalculada = calcularMedia(notasAluno, tipoMedia);
  console.log("Média calculada:", mediaCalculada);
  