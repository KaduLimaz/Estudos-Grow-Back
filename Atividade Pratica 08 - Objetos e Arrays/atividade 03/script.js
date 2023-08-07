// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

const aluno1 = {

    nome: "kadu",
    nota1: 80,
    nota2: 65
};

const aluno2 = {

    nome: "Suellem",
    notaAluno1: 95,
    notaAluno2: 85
};

let mediaAluno1 = 0;
let mediaAluno2 = 0;
let turmaAlunos = 0;


mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2;
mediaAluno2 = (aluno2.notaAluno1 + aluno2.notaAluno2) / 2;

turmaAlunos = (mediaAluno1 + mediaAluno2) / 2;

console.log("Media aluno 1: "+ mediaAluno1);
console.log("Media Aluno 2: " + mediaAluno2);
console.log("Media da turma: " + turmaAlunos);

