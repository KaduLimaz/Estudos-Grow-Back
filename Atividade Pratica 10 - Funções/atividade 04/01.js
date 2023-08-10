// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

function horas(tempoSegundos) {
  const horas = Math.floor(tempoSegundos /3600 );
    tempoSegundos %= 3600;
  const minutos = Math.floor(tempoSegundos / 60);
    tempoSegundos %= 60
    
    return `${horas} horas, ${minutos} minutos e ${tempoSegundos} Segundos;`
}

const totalSegundos = 6554

console.log(horas(totalSegundos));