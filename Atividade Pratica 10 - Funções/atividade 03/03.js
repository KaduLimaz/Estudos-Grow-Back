// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function ePrimo (numero){
    if (numero <= 1) {
        return false
    }

    for (i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }

    return true
} 


const numero = 3

if (ePrimo(numero)){
    console.log(numero + " é primo.")
} else {
    console.log (numero + " não é primo")
}