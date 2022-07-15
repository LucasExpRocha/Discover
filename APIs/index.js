const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/lucasexprocha')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})






// app.route('/:nome').get((req, res) => res.send(req.params.nome))


// app.use(express.json())

// app.route('/').post((req, res) => {
//     const {nome, cidade} = req.body
//     res.send(`Olá ${nome}, morador da cidade de ${cidade}`)
// })


// app.use(express.json())

// let author = "Lucas"

// app.route('/:identificador').delete((req, res) => {

//     res.send(req.params.identificador)
// })


// app.use(express.json())

// let author = "Lucas"

// app.route('/').get((req,res) => res.send(author))

// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })


// middleware

// app.use(express.json())

// app.route('/').post((req,res) => res.send(req.body))

// app.route('/').post((req, res)=> res.send("hello world"))
// app.route('/sobre').get((req, res)=> res.send("hello about"))