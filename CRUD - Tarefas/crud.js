const tarefas = [];

function createTask(title, description) {
  if (!title) {
    alert("Titulo obrigatorio");
    return;
  }
  tarefas.push({ title, description, completed: false });
}

function listTask() {
  tarefas.forEach((tarefa, index) => {
    console.log(
      `${index} TItulo: ${tarefa.title} - Descrição: ${
        tarefa.description
      } - Tarefa completada: ${tarefa.completed ? "SIM" : "NÃO"} `
    );
  });
}


function updateTaskStatus(index, completed){
    if ( index <= 0 || index > tarefas.length ){
        console.log("Indice nao encontrado");
        return
    }

    tarefas[index].completed = completed;
}




createTask(prompt("Digite o titulo: "), prompt("Digite a descrição: "));
updateTaskStatus(parseInt(prompt("Digite o indice da tarefa: ")), prompt("Se a tarefa foi concluida, digite 'Sim', se nao digite 'Nao' ").toLocaleLowerCase() === "sim" ? true: false)
listTask()

console.log(tarefas);
