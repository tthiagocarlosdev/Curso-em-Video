let valores = [3, 6, 5, 9, 1, 7, 8, 0, 4]
/*console.log(valores)
for (let contador = 0; contador < valores.length; contador++){
    console.log(`A posição ${contador} tem o valor: ${valores[contador]}.`)
}*/
valores.sort()
console.log("Usado for in:")
for(let contador in valores){
    console.log(`A posição ${contador} tem o valor: ${valores[contador]}.`)
}
valor = 2
console.log(`O índice do valor ${valor} é: ${valores.indexOf(valor)}`)