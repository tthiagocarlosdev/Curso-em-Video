function add(){
    var number = []
    var valuee = document.getElementById('addNumber')
    valuee = valuee.value
    var firstAnswer = document.getElementById('firstAnswer')
    var thereAreNumber = number.indexOf(valuee) >= 0
    if(thereAreNumber){
        alert('Valor inválido ou já encontrado na lista!')
    } else{        
        number.push(valuee)
        for(contador in number){
            let item = document.createElement('option')
            item.text += `Valor ${number[contador]} adicionado.`
            firstAnswer.appendChild(item)
        }
    }
}

