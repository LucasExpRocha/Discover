const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {title: "D", 
        message: "esenvolver aplicações/serviços de forma facil"
        },
        {title: "E", 
        message: "screva o suficiente para não esquecer"
        },
        {title: "M", 
        message: "as não se canse de estudar"
        }
    ];
    const subtitle = "O EJS é uma linguagem de modelagem para criação de paginas HTML utilizando JS"
    res.render('pages/index', {
        msg: items,
        subtitle: subtitle
    });
})



app.get("/sobre", function (req, res) {
    res.render('pages/about');
})

app.listen(8080);
 console.log("rodando")


// res é resposta
// O '/' seria o nosso dominio
//lembrar de dar node "server"
//parar o servidor ctrl c

