function contar() {
    var start = document.getElementById('inicio')
    var theAnd = document.getElementById('fim')
    var pass = document.getElementById('passo')
    const startNull = start.value.length == 0
    const theAndNull = theAnd.value.length == 0
    const passNull = pass.value.length == 0
    
    //validação de dados - se não for inserido nenhum dado
    if (startNull || theAndNull || passNull) {
        alert('[ERRO] Faltam dados!')
    // validação de dados - se for inserido dado
    } else{
        start = Number(start.value)
        theAnd = Number(theAnd.value)
        pass = Number(pass.value)
        var mensagem = document.querySelector('div#contagem')    
        
        //se o passo for igual a zero
        if (pass == 0) {
            alert('Passo inválido! Considerando Passo 1')
            pass = 1
        }    
        //se o passo for maior que zero
        //contagem progressiva
        mensagem.innerHTML = `Contando: </br>`
        if (start < theAnd) {
            for(let contador = start; contador <= theAnd; contador += pass){
                mensagem.innerHTML += `${contador} \u{1F449}`
            }                                
        //contagem regressiva    
        } else {
            for(let contador = start; contador >= theAnd; contador -= pass){
                mensagem.innerHTML += `${contador} \u{1F449}`
            }

        }
        mensagem.innerHTML += `\u{1f3C1}`
        
    }   
}