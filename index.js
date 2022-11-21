// Importação do express
const express = require('express')
const app = express()


app.get('/',function(req, res){
   res.send("Sistema Ativo oi")
})

app.listen(3000, function(){ 
    console.log("Inicialização na Porta 3000")
})