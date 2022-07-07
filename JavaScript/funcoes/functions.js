// function expression
// function anonymous

// parâmetros da função - parameters
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

//sum(2, 3) // arguments - argumentos

let number1 = 10
let number2 = 20

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a some é ${sum(number1, number2)}`)

// fuction scope

let subject = 'Create video'

function createThink(subject){
    subject = 'Study'
    return subject
}

console.log(createThink(subject))
console.log(subject)