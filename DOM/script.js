// Criando e adicionando elementos

//CreateElement

const div = document.createElement('div');
div.innerHTML = 'Olá devs'

//appendElement

const body = document.querySelector('body')
//body.append(div)
//body.prepend(div)

//insertBefore

//body.insertBefore(div, document.querySelector('script'))
const nexts = document.querySelector('header')
body.insertBefore(div, nexts.nextElementSibling)