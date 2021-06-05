const fs = require('fs')
const petsJson = require('./json.json')
//console.log(petsJson.pets)

function atualizarJson(){
fs.writeFileSync('./json.json', JSON.stringify(petsJson,null,2), 'utf-8')
}

function DataDeCadastro(){
    var guardar = petsJson.teste.map(function(elem){
      var DataCadastro = new Date()
      elem["DataCadastro"] = DataCadastro
      return elem
    })
    console.log(guardar)
    atualizarJson()
  }
  DataDeCadastro()