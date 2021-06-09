var valor = document.getElementById('adicionarNumero')
valor = valor.value
function adicionar(){
    if(valor == ''){
        alert('Valor inválido ou já encontrado na lista')
    } else if(valor > 100){
        alert('Valor inválido ou já encontrado na lista')
    } else if(valor == 0){
        alert('Valor inválido ou já encontrado na lista')
    } else {
        alert('OK')
        /*let mostrarSelect = document.getElementById('mostrarSelect')
        let meuArray = []
        meuArray = valor
        for (contador in meuArray){
            let seletor = document.createElement('option')
            seletor.text += `Valor ${meuArray[contador]} adicionado.`
            mostrarSelect.appendChild(seletor)
        }*/
    }
}



/*function add(){
    var number = []
    
    valuee = valuee.value
    var firstAnswer = document.getElementById('mostrarSelect')
    var numberB = number.indexOf(valuee)
    var thereAreNumber =  numberB < 0
    var thereAreZero = valuee.length == ''
    var thereAre100 = valuee > 100
    if(thereAreZero){
        alert('Valor inválido ou já encontrado na lista!')
    }else if (thereAre100){
        alert('Valor inválido ou já encontrado na lista!')
    } else if(thereAreNumber){
        var a = document.getElementById('numberB')
        a.innerHTML = `O valor do índice é ${numberB}`
        number.push(valuee)
        for(contador in number){
            let item = document.createElement('option')
            item.text += `Valor ${number[contador]} adicionado.`
            firstAnswer.appendChild(item)
        }
    } else{
        alert('Valor inválido ou já encontrado na lista!')
        
    }
    //mostrando os valores
    
}
function finish(){
    var total = number.length
    number = number.sort()
    var show = document.getElementById('show')
    for (contador in number){
        show.innerHTML += `${number[contador]} - `
    }
    show.innerHTML += `Ao todo temos ${total} cadastrados`
}*/
