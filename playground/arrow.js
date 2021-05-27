const arrow = ()=>{
    console.log('isso é uma arrow function')
}

arrow()

const arrow2 = numero => console.log('recebi o numero '+numero)

arrow2(5)

const arrow3 = (n1,n2) => {
    return n1+n2
}
console.log(arrow3(5,10))

let dobreDe = numero => numero*2

console.log(dobreDe(5))

const soma = (a,b)=>a+b

console.log(soma(4,7))

let horaAtual = () => {
    let data = new Date();
    return data.getHours()+':'+data.getMinutes();
}

console.log(horaAtual)