
// Conexão com o Banco de Dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('infinity', 'raiz','12345', {
    host:"localhost",
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


// Verificação de conexão do Banco
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar" +erro)
})
