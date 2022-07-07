// clearTimeout vai rodar uma función depois de x milisegundos

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)