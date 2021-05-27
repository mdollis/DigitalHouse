let nome = 'Marcos'
let idade = 45
if (idade=>18){
    var eMaiorDeIdade = true
}else{
    var eMaiorDeIdade = false
}
console.log(nome+' tem '+idade+' anos')
if (eMaiorDeIdade){
    console.log('portanto é maior')
}else{
    console.log('portanto é menor')
}

var pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade
}
console.log(pessoa.nome)

var pessoa2 = {
    nome,
    idade,
    eMaiorDeIdade
}
console.log(pessoa2.idade)

var animais = ['boi', 'porco', 'frango', 'peixe']
var n1=1
var n2=10
var resultadoSoma=n1+n2

console.log(resultadoSoma)

if (n1>n2){
    console.log(n1+' é maior que '+n2)
}else{
    console.log(n2+' é maior que '+n1)
}
