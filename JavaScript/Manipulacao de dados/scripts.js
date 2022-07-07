let techs = ["html", "css", "js"]

// adicionar um item no fim do array
techs.push("React")
// adicionar no começo
techs.unshift("SqL")
// remover um item do final
//techs.pop()
// remover do começo
//techs.shift
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array

console.log(techs)
techs.splice(1,1)
// encontrar a posição de um elemento no array
let position = techs.indexOf('js')

console.log(techs)
console.log(position)
