/*
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transofmação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

function transformDegree(degree){
    let celsiusExists = degree.toUpperCase().includes('C') //resultado boolean
    let FahrExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !FahrExists){
        throw new Error('Grau não identificado')
    }

    // caso o F for true
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // caso o F for False
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'    
    }


    return formula(updateDegree) + degreeSign
}

try{
    console.log(transformDegree('50C'))
    transformDegree('50Z')
} catch(error){
    console.log(error.message)
}