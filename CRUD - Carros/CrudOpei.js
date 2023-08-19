
  let veiculos = [];
  let contadorId = 1;

  function cadastrarVeiculo() {
    const modelo = prompt("Digite o modelo do veículo:");
    const marca = prompt("Digite a marca do veículo:");
    const ano = prompt("Digite o ano do veículo:");
    const cor = prompt("Digite a cor do veículo:");
    const preco = prompt("Digite o preço do veículo:");

    const veiculo = {
      id: contadorId,
      modelo: modelo,
      marca: marca,
      ano: ano,
      cor: cor,
      preco: preco
    };

    veiculos.push(veiculo);
    contadorId++;
    alert("Veículo cadastrado com sucesso!");
  }

  function listarVeiculos() {
    for (let i = 0; i < veiculos.length; i++) {
      console.log(
        `ID: ${veiculos[i].id} | Modelo: ${veiculos[i].modelo} | Marca: ${veiculos[i].marca} | Ano: ${veiculos[i].ano} | Cor: ${veiculos[i].cor} | Preço: R$${veiculos[i].preco}`
      );
    }
  }

  function filtrarPorMarca() {
    const marcaFiltro = prompt("Digite a marca que deseja filtrar:");
    const veiculosFiltrados = veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marcaFiltro.toLowerCase());
    veiculosFiltrados.forEach(veiculo => {
      console.log(
        `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`
      );
    });
  }

  function atualizarVeiculo() {
    const idAtualizar = Number(prompt("Digite o ID do veículo que deseja atualizar:"));
    const veiculo = veiculos.find(veiculo => veiculo.id === idAtualizar);

    if (!veiculo) {
      alert("Veículo não encontrado. Volte ao menu inicial.");
      return;
    }

    const novaCor = prompt("Digite a nova cor do veículo:");
    const novoPreco = prompt("Digite o novo preço do veículo:");
    veiculo.cor = novaCor;
    veiculo.preco = novoPreco;
    alert("Veículo atualizado com sucesso!");
  }

  function removerVeiculo() {
    const idRemover = Number(prompt("Digite o ID do veículo que deseja remover:"));
    const index = veiculos.findIndex(veiculo => veiculo.id === idRemover);

    if (index === -1) {
      alert("Veículo não encontrado. Volte ao menu inicial.");
      return;
    }

    veiculos.splice(index, 1);
    alert("Veículo removido com sucesso!");
  }

  function main() {
    while (true) {
      const opcao = prompt(
        "Bem-vindo ao sistema de CRUD de veículos:\n" +
        `No momento, o sistema tem ${veiculos.length} carros cadastrados\n` +
        "Escolha uma das opções para interagir com o sistema:\n" +
        "1 - Cadastrar veículo\n" +
        "2 - Listar todos os veículos\n" +
        "3 - Filtrar veículos por marca\n" +
        "4 - Atualizar veículo\n" +
        "5 - Remover veículo\n" +
        "6 - Sair do sistema"
      );

      switch (opcao) {
        case "1":
          cadastrarVeiculo();
          break;
        case "2":
          listarVeiculos();
          break;
        case "3":
          filtrarPorMarca();
          break;
        case "4":
          atualizarVeiculo();
          break;
        case "5":
          removerVeiculo();
          break;
        case "6":
          alert("Saindo do sistema.");
          return;
        default:
          alert("Opção inválida. Escolha novamente.");
          break;
      }
    }
  }

  main();

