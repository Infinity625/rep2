const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rota principal
app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html");
})

// Rotas  de envio do formulario
app.get("/form", function(req,res){
    res.sendFile(__dirname + "/html/form.html");
})

app.get("/blog", function(req,res){
    res.send("Meu blog!");
})

app.get("/ola/:cargo/:nome:/:cor", function(req,res){
    res.send("ola" + req.params.nome);
})

// Rotas de envio de dados para o backend
app.get("/cad", function(req,res){
    res.sendFile(__dirname + "/html/form.html");
 })

app.post("/add", function(req,res){
    Post.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        faixaEtaria: req.body.faixaEtaria,
        perfilInvestidor: req.body.perfilInvestidor,
        metodoDeOperacao: req.body.metodoDeOperacao,
        comportamentoEmocional: req.body.comportamentoEmocional,
        avaliacaoDaEmpresa: req.body.avaliacaoDaEmpresa,
        motivacaoDoCliente: req.body.motivacaoDoCliente,

  }).then(function(){
    res.send("Post foi criado com sucesso")
}).catch(function(erro){
    res.send("houve um erro:" + erro)
   })
})

// Abrindo o servidor 
app.listen(3000);
console.log('Servidor rodando!')


    // res.send("texto: "+req.body.nome+" Sobrenome: "+req.body.sobrenome)
   // res.send("FORMULARIO RECEBIDO!");s
