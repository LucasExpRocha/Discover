/*
    Sistemas de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas []
        * despesas []
    
    Agora, crie uma função que irá calcular o total de receitas e de despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let receitas = [1636, 2100]
let despesas = [100, 568, 300]
let custFamily = {
    receitas,
    despesas
}

console.log(custFamily.receitas.length)


let totalDespesas = 0
let totalReceitas = 0

for(despesa in custFamily.despesas){
    totalDespesas = totalDespesas + custFamily.despesas[despesa]
}
console.log(totalDespesas)

for(receita in custFamily.receitas){
    totalReceitas = totalReceitas + custFamily.receitas[receita]
}
console.log(totalReceitas)

let totalFamiliar = totalReceitas - totalDespesas
console.log(totalFamiliar + ' Restantes')

// -----------------------------

function sum(array){
    let total = 0;

    for(let elemento of array)
        total += elemento

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(custFamily.receitas)
    const calculateExpenses = sum(custFamily.despesas)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)

}

calculateBalance()