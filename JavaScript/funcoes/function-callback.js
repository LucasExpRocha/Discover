// callback function

function sayMyName(name) {
    console.log(name)
    name()
}

sayMyName(
    () => {
        console.log('Estou em um callback')
    }
)