
// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto



const nome = prompt("Digite seu nome: ");
while (true) {
    
    const sexo = prompt("Digite seu sexo: F ou M ").toUpperCase();

    if (sexo === "F") {
        let valorCompraF = parseInt(prompt("Digite valor da compra: "));
        valorDescontoF = valorCompraF - (valorCompraF * 0.13);
        console.log (`Sua compra ${nome} com 15% de desconto é: ${valorDescontoF}`);
        break
    }
     if ( sexo === "M") {
        let valorCompraM = parseInt(prompt("Digite valor da compra: "));
        valorDescontoM = valorCompraM - (valorCompraM * 0.05);
        console.log (`Sua compra ${nome} com 5% de desconto é: ${valorDescontoM}`);
        break
     }

     
}

    
