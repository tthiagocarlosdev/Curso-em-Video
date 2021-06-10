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
            // mostrar no seletor
            let item = document.createElement('option')
            item.text += `Valor ${Number(numero.value)} adicionado`
            select.appendChild(item)

            //adicionar o valor a lista
            lista += numero.value
            resultadoFinal.innerHTML = ``
    } else {
        alert('Número inválido ou já encontrado na lista!')
    }
}


function finalizar(){
    let tamanho = lista.length
    let listaEmOrdemCrescente = lista.sort()
    let menorValor = lista[0]
    resultadoFinal.innerHTML = `Ao todo, temos ${tamanho} números cadastrados.`
    resultadoFinal.appendChild = (`O menor valor informado foi ${menorValor}`)
}