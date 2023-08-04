// // 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// // modalidades de pagamento para a venda de suas mercadorias:

// a vista ... desconto de 2.5% sobre o preço de tabela
// de 2 a 5 vezes ... preço de tabela, sem desconto ou acrescimo
// de 6 ate 10 vezes ... juros de 6% sobre o preço de tabela
// de 11 até 15 vezes ... juros de 13% sobre o preço de tabela.

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

function calcularCompra(precoTabela, numeroParcelas) {
  if (numeroParcelas === 1) {
    const descontoAVista = precoTabela * 0.025;
    const precoAVista = precoTabela - descontoAVista;
    return {
      valorParcela: precoAVista,
      valorTotal: precoAVista,
    };
  } else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
    return {
      valorParcela: precoTabela,
      valorTotal: precoTabela,
    };
  } else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
    const jurosParcelas = precoTabela * 0.06;
    const precoParcela = (precoTabela + jurosParcelas) / numeroParcelas;
    return {
      valorParcela: precoParcela,
      valorTotal: precoTabela + jurosParcelas,
    };
  } else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
    const jurosParcelas = precoTabela * 0.13;
    const precoParcela = (precoTabela + jurosParcelas) / numeroParcelas;
    return {
      valorParcela: precoParcela,
      valorTotal: precoTabela + jurosParcelas,
    };
  } else {
    return {
      valorParcela: 0,
      valorTotal: 0,
    };
  }
}

// Exemplo de uso:
const precoTabela = 1000; // Substitua pelo preço de tabela desejado
const numeroParcelas = 12; // Substitua pelo número de parcelas desejado

const resultadoCompra = calcularCompra(precoTabela, numeroParcelas);
console.log(`Valor de cada parcela: R$ ${resultadoCompra.valorParcela.toFixed(2)}`);
console.log(`Valor total da compra: R$ ${resultadoCompra.valorTotal.toFixed(2)}`);
