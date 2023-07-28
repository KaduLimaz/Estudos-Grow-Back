// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.


let numeros = [];
let media = [];
let positivos = [];
let negativos = [];

for ( i = 0; i < 10; i++) {
  numeros.push(parseInt(prompt(`Digite ${i + 1} º numero`)));
}
for (i = 0; i < numeros.length; i++){
  media = (media + numeros[i])
   if (numeros[i] < 0 && numeros[i] !== 0) {
    negativos.push(numeros[i])
   }else {
    positivos.push(numeros[i])
   }
}

console.log(`${media / numeros.length} média aritimetica: `);
console.log(`${negativos.length} numeros negativos: `);
console.log(`${positivos.length} numeros positivos: `);
console.log(`${((negativos.length * 100) / numeros.length).toFixed(2)} % de numeros negativos: `);
console.log(`${((positivos.length * 100) / numeros.length).toFixed(2)} % de numeros positivos: `);