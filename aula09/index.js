// Importar express no arquivo index.js
const express = require('express')

// Criar uma instancia do express
const app = express()

//utilizar o metodo listen para q com um console.log consiga exibir a mensagem: Servidor rodando na porta 3000
app.listen(3000,() => { console.log('Servidor rodando: http://localhost:3000')})
