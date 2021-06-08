function add(){
    var number = []
    var valuee = document.getElementById('addNumber')
    
    valuee = valuee.value
    var firstAnswer = document.getElementById('firstAnswer')
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
    var total = number.length
    var show = document.getElementById('show')
    for (contador in number){
        show.innerHTML += `${number[contador]} - `
    }
    show.innerHTML += `Ao todo temos ${total} cadastrados`
}

