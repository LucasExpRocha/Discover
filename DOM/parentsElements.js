// Navegando pelos elementos
// parentNode parentElement

//const body = document.querySelector('body')

//console.log(body.parentElement)

// todos os filhos - node list
//espaços podem ser text

const element = document.querySelector('body')

console.log(element.childNodes)

//children ja traz sem espaços vazios "text"

console.log(element.children)

// first child element

console.log(element.firstChild)
console.log(element.firstElementChild)

// last child

console.log(element.lastChild)
console.log(element.lastElementChild)

// Buscando irmãos - Sibling

const el = document.querySelector('body')

console.log(el.nextElementSibling)

console.log(el.previousElementSibling)