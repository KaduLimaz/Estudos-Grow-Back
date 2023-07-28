// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...



// No loop for, a variável numero inicia com o valor 30, e o loop continuará enquanto numero for maior ou igual a 1. Isso garante que a contagem regressiva vá de 30 até 1.
for (let numero = 30; numero >= 1; numero--) {

    let ehPrimo = true; 
  
    // Verificação se o número é primo
    if (numero <= 1) {
      ehPrimo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          ehPrimo = false;
          break;
        }
      }
    }
    // Impressão do número marcado ou não
    if (ehPrimo) {
      console.log(`[${numero}]`); // Marca o número entre colchetes se for primo
    } else {
      console.log(numero); // Imprime o número normalmente se não for primo
    }
  }
  



//   No loop for, a variável numero inicia com o valor 30, e o loop continuará enquanto numero for maior ou igual a 1. Isso garante que a contagem regressiva vá de 30 até 1.

// A variável ehPrimo é inicializada com o valor true antes de cada iteração do loop. Isso ocorre porque, em cada passo do loop, queremos verificar se o número atual (numero) é primo. Ao iniciar como true, estamos assumindo que o número é primo até que seja provado o contrário.

// Em seguida, temos um bloco de código para verificar se o número atual (numero) é primo ou não. Se o número for menor ou igual a 1, automaticamente não será primo, e atribuímos false à variável ehPrimo.

// Caso o número atual (numero) seja maior que 1, utilizamos um loop for para verificar se ele é divisível por algum número inteiro positivo menor ou igual à sua raiz quadrada (Math.sqrt(numero)). Se encontrarmos algum divisor, atribuímos false à variável ehPrimo e saímos do loop, pois já temos a prova de que o número não é primo.

// Após a verificação, temos o bloco if que verifica o valor de ehPrimo. Se ehPrimo for true, significa que o número é primo, e ele será impresso entre colchetes ([ ]). Caso contrário, o número será impresso normalmente, sem colchetes.

// Dessa forma, a variável ehPrimo é usada como uma "bandeira" para indicar se o número atual (numero) é primo ou não, e seu valor é definido de acordo com a verificação de primaridade realizada dentro do loop for.