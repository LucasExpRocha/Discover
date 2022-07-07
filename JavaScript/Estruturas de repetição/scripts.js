// Estrutura de repetição
// for
// break - para a execução
// continue - pula a execução do nome

//for of

let namex = 'Lucas'
let names = ['João', 'Larissa']

for(let name of names){
    console.log(name)
}

// for in

let name = {
    name: 'lucas',
    age: 26,
    weight: 66.6
}

for(let element in name){
    console.log(name[element])
}