// 1. Declare uma variável de nome wight

let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight) //undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados:

    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: Boolean
*/

let name, age, stars, isSubscribed
name = `Lucas`
age = 26
stars = 20.3
isSubscribed = true

/*  4. A variável stundent abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name><age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Lucas",
    age: 26,
    stars: 20.3,
    isSubscribed: true,
    weight: 66.5
}

console.log('O ' + student.name + ' de idade ' + student.age + ' anos, pesa ' + student.weight + ' kgs.')

//  5. Declare uma variável do tipo Array, de nome stundets e atribua a ela nenhum valor, ou seja, somente o array vazio 

let students = []

//  6. Retribua valor para variável acima, colocando dentro dela o objeto da questão 4.
//  (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students = [student]
console.log(students)


//  7. Coloque no console o valor da posição zero do array acima

console.log(students[0])

//  8. Crie um novo student e coloque na posição 1 do array students


let studentum = {
    name: "Maria",
    age: 16,
    stars: 20.3,
    isSubscribed: true,
    weight: 66.5
}

students[1] - studentum
//students = [student, studentum]

