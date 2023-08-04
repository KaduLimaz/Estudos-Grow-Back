// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

let n1 = 4
const raiz = Math.floor(Math.sqrt(n1));
let ePrimo = true;

for (let i = 2; i <= raiz; i++) {
    if (n1 % i === 0) {
      ePrimo = false;
      break;
    }
  }

  document.write(ePrimo);