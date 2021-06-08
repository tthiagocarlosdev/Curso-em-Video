function parImpar(numero){
    if(numero % 2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}
valor = 4
console.log(`O número ${valor} é ${parImpar(valor)}!`) 
