function gerarTabuada(){
    var numero = document.getElementById('numero')
    var resposta = document.getElementById('resposta')
    if (numero.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        numero = Number(numero.value)
        let contador = 0
        resposta.innerHTML = ``
        do {
            let item = document.createElement('option')
            item.text += `${numero} x ${contador} = ${numero * contador}`
            resposta.appendChild(item)
            contador++
        } while (contador <=9);
    }
    
}