//Manipulando conteúdo

/*
textContent - conteudo de texto

const element = document.querySelector('h1')

element.textContent += " Olá Devs!"

innerText - trocar texto interno

element.innerText = "Olá Devs!"

innerHTML - para usar html no javascript

element.innerHTML = "Olá Devs!"

const input = document.querySelector('input')

input.value = "Olá Devs!"
*/
//Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')