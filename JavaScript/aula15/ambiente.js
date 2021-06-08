let numero = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${numero}.`)
numero.push(7)
console.log(`Valor no índice 3: ${numero[3]}`)
numero[7] = 1
console.log(`O vetor tem ${numero.length} posições.`)
console.log(`Nosso vetor em ordem crescente: ${numero.sort()}.`)
console.log(`Valor no índice 3: ${numero[3]}`)
for (let contador = 0; contador < numero.length; contador++) {
    console.log(numero[contador])
}