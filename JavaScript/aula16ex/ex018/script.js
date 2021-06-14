let numero = document.querySelector('input#adicionarNumero')
let select = document.querySelector('select#mostrarSelect')
let resultadoFinal = document.querySelector('div#resultadoFinal')
let lista = []

//função que testa se o número está entre o intervalor de 1 a 100.
function ehNumero(valor){
    if(Number(valor) >= 1 && Number(valor) <= 100){
        return true
    } else {
        return false
    }
}

//função que testa se o valor digitado já se encontra na lista.
function naLista(valor, lista){
    if(lista.indexOf(Number(valor)) != -1){
        return true
    } else {
        return false
    }
}

select.innerHTML = ``

function adicionar(){
    if(ehNumero(numero.value) && !naLista(numero.value, lista)){
            //adicionar o valor a lista
            lista.push(Number(numero.value))
            // mostrar no seletor
            let item = document.createElement('option')
            item.text += `Valor ${Number(numero.value)} adicionado`
            select.appendChild(item)
            resultadoFinal.innerHTML = ``
    } else {
        alert('Número inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()
}



function finalizar(){
    if (lista.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let totalValores = lista.length
        let listaEmOrdemCrescente = lista.sort()
        let listaMaior = totalValores - 1
        let maiorValor = lista[listaMaior]
        let menorValor = lista[0]
        let somaValores = 0
        let mediaValores = 0
        for (let contador in lista){
             somaValores += lista[contador]
        }
        mediaValores = somaValores / totalValores
        
        resultadoFinal.innerHTML += `<p>Ao todo, temos ${totalValores} números cadastrados.</p>`
        resultadoFinal.innerHTML += `<p>O menor valor informado foi ${menorValor}</p>`
        resultadoFinal.innerHTML += `<p>O maior valor informado foi ${maiorValor}</p>`
        resultadoFinal.innerHTML += `<p>Somando todos os valores, temos ${somaValores}</p>`
        resultadoFinal.innerHTML += `<p>A média entre os valores digitados é ${mediaValores.toFixed(1)}</p>`
    }
    
    
}