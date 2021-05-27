var carro = {
    modelo: 'Fusca',
    fabricante: 'VW',
    ativo: true
};

console.log(carro.fabricante)
console.log(carro.fabricante+' '+carro.modelo)

let pessoa = {
    nome: 'Valentina',
    idade: 3,
    cumprimentar: function(){
        return 'Olá, eu sou '+this.nome+' e tenho '+this.idade+' anos !';
    }
}

console.log(pessoa.cumprimentar())

function Carro (marca,modelo){
    this.marca = marca;
    this.modelo = modelo;
}

let meuCarro = new Carro('Ford','Ranger');
let meuCarro = new Carro('VW','Polo');

console.log(seuCarro)