// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter



const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,1290.00, 15000.00];

const salarioIndex = salarios.findIndex( qsalario => qsalario > 7500)
const salarioFiltrado = salarios.filter (salario => salario > 8000)




console.log(`Salario maior que 7.500:  ${salarioIndex}`)
console.log(`Lista de salarios maior que 8.000:  ${salarioFiltrado}`)


    




    


