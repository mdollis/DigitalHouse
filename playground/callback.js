const dobro = (num) => num*2;
const triplo = (num) => num*3;
 
const aplicar = (num, operacao) => operacao(num)
 
aplicar(2, dobro); // 4
aplicar(4, triplo); // 12

// segundo exercicio


function somar(n1,n2) {
    return n1+n2
}
function subtrair(n1,n2) {
    return n1-n2
}

function multiplicar(n1,n2) {
    return n1*n2
}

function dividir(n1,n2) {
    return n1/n2
}


function calculadora(n1,n2,operacao){
   return(operacao(n1,n2))
}

console.log(calculadora(2,5,somar))

function adicionarHttp(url) {
    return 'http://'+url
}

function processar(__,__){
    // escreva seu código aqui
}