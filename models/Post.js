const db =  require('./db')

const Post = db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    faixaEtaria: {
        type: db.Sequelize.STRING
    },
    perfilInvestidor: {
        type: db.Sequelize.STRING
    },
    metodoDeOperacao: {
        type: db.Sequelize.STRING
    },
    comportamentoEmocional: {
        type: db.Sequelize.STRING
    },
    avaliacaoDaEmpresa: {
        type: db.Sequelize.STRING
    },
    motivacaoDoCliente: {
        type: db.Sequelize.STRING
    },
})

//Post.sync({force:true})

// Permite o acesso ao model/Post através de outros arquivos
module.exports = Post


// Estruturação do Banco de Dados
//cd Models
// node Post.js
