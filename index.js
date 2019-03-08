var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var usuarios = []

app.get('/', function(req, res) {
    res.send('API bombando');
});

app.get('/listar-usuarios', function(req, res) {
    var usuarioResponse = JSON.stringify(usuarios)
    res.send(usuarios);
});

app.post("/cadastrar-usuarios", function(req, res) {
    const nome = req.body.nome
    const idade = req.body.idade
    const sexo = req.body.sexo
    const usuario = {
        nome: nome,
        idade: idade,
        sexo: sexo
    }
    usuarios.push(usuario);
    res.send(usuario);


})

app.listen(3000);


console.log("Hello World");