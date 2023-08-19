let carrosID = 0;
let cadastroVeiculos = [{
    id: carrosID,
    modelo: "Fiat",
    marca: "Uno",
    ano: "1997",
    cor: "Prata",
    preco: 7000
    
}];


function bemVindo() {
  alert("Bem-vindo ao sistema de CRUD de veículos:");
}


// CADASTRO


function cadastroVeiculo() {
    const modelo = prompt("Digite o modelo do veículo:");
    const marca = prompt("Digite a marca do veículo:");
    const ano = prompt("Digite o ano do veículo:");
    const cor = prompt("Digite a cor do veículo:");
    const preco = prompt("Digite o preço do veículo:");
    const veiculo = {
    id: carrosID,
    modelo,
    marca,
    ano,
    cor,
    preco
  };

  cadastroVeiculos.push(veiculo);
  carrosID++;
  alert("Veículo cadastrado com sucesso!");
}

// LISTAR

function listarVeiculos() {
  for (i = 0; i < cadastroVeiculos.length; i++) {
    console.log(
      `ID:${carrosID}|Modelo:${cadastroVeiculos[i].modelo}|Marca:${cadastroVeiculos[i].marca}|Ano:${cadastroVeiculos[i].ano}|Cor:${cadastroVeiculos[i].cor}|Preço:${cadastroVeiculos[i].preco}`
    );
  }
}


// FILTRO

function filtrarMarca(){
    const marcaFiltro = prompt("Digite a marca que deseja filtrar:");
    const veiculosFiltrados = cadastroVeiculo.filter( (veiculo) => {veiculo.marca.toLowerCase() === marca.toLowerCase()} )

    return marcafiltro
}

// const marcaFiltrar = prompt("Digite a marca que deseja filtrar:");





cadastroVeiculo(
  prompt`Digite o modelo do carro: `,
  prompt`Digite a marca do carro: `,
  prompt`Digite o Ano do carro: `,
  prompt`Digite a Cor do carro: `,
  prompt`Digite o Valor do carro: `
);


listarVeiculos()
// filtrarMarca(marcaFiltrar);
