// Eventos
/*
function print(){
    console.log('print')
}

// evento de teclado

const input = document.querySelector('input');

input.onkeyup = function(){
    console.log('rodei')
}

*/

const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print(){
    console.log('print')
}

//addEventListener empilha todas as funçoes