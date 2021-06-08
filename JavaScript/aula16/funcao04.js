function fatorial(numero){
let fat = 1
    for(let contador = numero; contador > 1; contador--){
        fat *= contador
    }
    return fat
}
console.log(fatorial(3))

// 5! = 5 x 4 x 3 x 2 x 1