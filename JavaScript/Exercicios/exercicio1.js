/* Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima   -   A
* entre 80 - 89     -   B
* entre 70 - 79     -   C
* entre 60 - 69     -   D
* menor que 60      -   F

*/
/*
function transformNote(score){
    let result
    let
    switch (score) {
        case score >= 90 && score <= 100:
            result = 'A'            
            break;
        case score >= 80 && score <= 89:
            result = 'B'            
            break;
        case score >= 70 && score <= 79:
            result = 'C'            
            break;
        case score >= 60 && score <= 69:
            result = 'D'            
            break;
        case score >= 00 && score < 60:
            result = 'F'            
            break;
        default:
            console.log('Error')
            break;
    }
    return result
}

console.log(transformNote(90))*/

function transformNote(score){

    //let scoreA = score >= 90 && score <= 100
    //let scoreB = score >= 80 && score <= 89.99
    //let scoreC = score >= 70 && score <= 79.99
    //let scoreD = score >= 60 && score <= 69.99
    //let scoreF = score >= 00 && score < 60
   
    let result
    if (score >= 90 && score <= 100){
        result = "A"
    }
    else if (score >= 80 && score <= 89.99){
        result = "B"
    }
    else if (score >= 70 && score <= 79.99){
        result = "C"
    }
    else if (score >= 60 && score <= 69.99){
        result = "D"
    }
    else if (score >= 00 && score < 60){
        result = "F"
    }
    else{
        result = "Nota invalida"
    }

   return result
}

console.log(transformNote(79.9))
console.log(transformNote(89.9))
console.log(transformNote(82))
console.log(transformNote(87))
console.log(transformNote(67))
console.log(transformNote(78))
console.log(transformNote(49))
console.log(transformNote(90))
console.log(transformNote(50))
console.log(transformNote(56))


