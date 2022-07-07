// Manipulação de string e números

// Transformar string em número e número em string

let string = "123"

console.log(Number(string))

let number = 321

console.log(String(number))

let word = "Paralelepipedo"

console.log(word.length)

console.log(String(number).length)

// transformar um número quebrado com 2 casas decimais e trocar ponto por virgula

let numero = 345.6548413
//toFixed para mostrar 2 caracteres
console.log(numero.toFixed(2).replace(".",","))

// tronsformar em NaN por que a "," não pertence ao tipo numerico

// Transforme letras minusculas em maiusculas e vice versa

console.log(word.toUpperCase())
console.log(word.toLowerCase())

// Verificar se o texto contém a palavra


//Tomar cuidado pois é case sensitive, ou seja, tem diferença entre maiusculas e minusculas
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// split define "o que separa"
let myArray = phrase.split(" ")

// metodo join junta o array
let phraseWithUnderscore = myArray.join("_")

// criar array com construtor

let newArray = new Array('a', 'b', 'c')
console.log(newArray)

// Contar elementos de um array

console.log(newArray.length)

// Transformar uma cadeira de caracteres em elementos de um array

let escrita = "ManiPULAção de dados"

console.log(Array.from(escrita))