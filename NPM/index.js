const questions = [
    "O que eu aprendi hoje?",
    "O que me eixou aborrecido, O que eu poderia fazer para melhorar?",
    "O que me deixou mais feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 2) => {
    process.stdout.write("\n" + questions[index] + " > ");
}

ask()


const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim()+"\n");
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit();
    }
})