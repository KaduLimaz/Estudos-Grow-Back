// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

function listaNomes() {
  const nomes = [];


  // Solicitando ao usuário a entrada de 5 nomes
  for (let i = 1; i <= 5; i++) {
    const nome = prompt(`Nome ${i}:`);
    nomes.push(nome);
  }

  // Exibindo a lista de nomes na tela
  console.log("Lista de nomes:");
  console.log(nomes.join(', '));

  // Exibindo a lista de nomes na ordem inversa
  console.log("Nomes na ordem inversa:");
  console.log(nomes.reverse().join(', '));
}

// Chamando a função para executar o algoritmo
listaNomes();
