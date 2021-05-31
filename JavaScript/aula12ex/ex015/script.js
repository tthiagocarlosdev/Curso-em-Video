function verificar() {
    
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.getElementById('anoNascimento')
    var mensagem = document.querySelector('div#mensagemFinal')
    
    //var idade = anoNascimento - anoAtual  
    if(anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //Criança
                imagem.setAttribute('src', './imagensPng/boy.png')
            }else if(idade < 21){
                //Jovem
                imagem.setAttribute('src', './imagensPng/teenBoy.png')
            }else if(idade < 50){
                // Adulto
                imagem.setAttribute('src', './imagensPng/man.png')
            }else{
                //idoso
                imagem.setAttribute('src', './imagensPng/oldMan.png')
            }
        } else if(sexo[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                imagem.setAttribute('src', './imagensPng/girl.png')
            }else if(idade < 21){
                //Jovem
                imagem.setAttribute('src', './imagensPng/tennGirl.png')
            }else if(idade < 50){
                // Adulto
                imagem.setAttribute('src', './imagensPng/women.png')
            }else{
                //idoso
                imagem.setAttribute('src', './imagensPng/oldWomen.png')
            }
        }
        mensagem.style.textAlign = 'center'
        mensagem.innerHTML = `Detectamos ${genero} com ${idade} anos`
        mensagem.appendChild(imagem)
    }
}



/*
//GENERO
var genero = window.document.getElementById('mulher')
genero = window.document.getElementById('homem')
if (genero = 'mulher') {
    var sexo = 1
}else{
    sexo = 2
}
function verificar() {
    var actuallyAge = age - year
       switch (sexo) {
           case 1:
               if (idade < 12) {
                   mensagem.innerHTML(`Detectamos um menina com ${idade} anos`)
               }
               break;
            case 2:

                break;
           default:

               break;
       } 
}
*/