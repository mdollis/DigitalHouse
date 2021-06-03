let sites = ['www.google.com','www.x.com','fg']

function adicionarHttp(url){
    return 'http://'+url;
}

function processar(array,callback){
    for (let i=0;i<array.length; i++){
        array[i]=callback(array[i])
    }
    return array
}

console.log(sites)
processar(sites,adicionarHttp)
console.log(sites)